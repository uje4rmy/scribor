import Sidebar from "../../../../components/Sidebar";
import AppTopBar from "../../../../components/AppTopBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Oversight from "./Oversight";
import Payments from "./Payments";
import ProfileEditing from "./ProfileEditing";
import SectionLabel from "../../../../components/clientProfiles/SectionLabel";
import InputRow from "../../../../components/clientProfiles/InputRow";
import MATTER_BAND_VALUES from "../../../../components/clientProfiles/BandValues";

function Card({ title, headerAction, children, className = "" }) {
  return (
    <div
      className={`flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        {headerAction}
      </div>
      <div className="mt-3 flex flex-1 flex-col gap-2">{children}</div>
    </div>
  );
}

function checkNull(field) {
  return field === null || field === "" ? "Not Provided" : field;
}

function checkDirectors(directors) {
  const val = checkNull(directors);

  if (val) {
    const i = parseInt(val);
    return i > 1 ? `${directors} parties` : `${directors} party`;
  } else {
    return val;
  }
}

function getDirtyFields(original, draft) {
  // Only stores the fields that have been changed
  const changed = {};

  for (const key in draft) {
    if (draft[key] !== original[key]) {
      changed[key] = draft[key];
    }
  }
  return changed;
}
const ClientProfile = () => {
  const [clientProfile, setClientProfile] = useState([]);
  const [error, setError] = useState("");
  const [payments, setPayments] = useState([]);
  const [showLogPayment, setShowLogPayment] = useState(false);
  const paymentsInitializedForId = useRef(null);
  const [profileEditing, setProfileEditing] = useState(false);
  const [profileDraft, setProfileDraft] = useState({});
  const [loading, setLoading] = useState(true);

  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (isLoading || !user) return;

    const getMatters = async () => {
      try {
        const userId = user.sub.split("|")[1];
        const res = await axios.get(
          "http://localhost:8081/api/matters/client-profile/" + userId,
        );
        setClientProfile(res.data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMatters();
  }, [user, isLoading]);

  async function saveProfileEdit() {
    try {
      const dirtyFields = {
        ...getDirtyFields(clientProfile, profileDraft),
        client_id: clientProfile.client_id,
        matter_id: clientProfile.matter_id,
        entity_id: clientProfile.entity_id,
      };

      await axios.post(
        "http://localhost:8081/api/matters/update-client-profile/",
        dirtyFields,
      );

      setClientProfile((prev) => ({
        ...prev,
        ...dirtyFields,
      }));
      setProfileEditing(false);
      setProfileDraft({});
    } catch (error) {
      console.log(error);
    }
  }

  function cancelProfileEdit() {
    setProfileEditing(false);
    setProfileDraft({});
  }

  function startProfileEdit() {
    setProfileDraft({ ...clientProfile });
    setProfileEditing(true);
  }

  return (
    <div className="grid grid-cols-[224px_1fr] min-h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="min-h-screen w-full px-3 py-6 text-sm text-slate-900 sm:px-4 lg:px-6">
        <AppTopBar />

        <div className="mx-auto mt-8 w-full max-w-[1920px]">
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-8 w-48 rounded bg-slate-200" />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="h-64 rounded-xl bg-slate-100" />
                <div className="h-64 rounded-xl bg-slate-100" />
              </div>
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                <Card
                  title="Client Profile"
                  className="min-h-0"
                  headerAction={
                    profileEditing ? (
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={cancelProfileEdit}
                          className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={saveProfileEdit}
                          className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={startProfileEdit}
                        className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                      >
                        Edit
                      </button>
                    )
                  }
                >
                  {profileEditing ? (
                    <ProfileEditing
                      clientProfile={clientProfile}
                      profileDraft={profileDraft}
                      setProfileDraft={setProfileDraft}
                      checkDirectors={checkDirectors}
                    />
                  ) : (
                    <>
                      <SectionLabel label={"Client Details"} />
                      <div className="grid gap-2 sm:grid-cols-2">
                        <InputRow
                          label="Full Name"
                          value={clientProfile.client_fullname}
                        />
                        <InputRow
                          label="Client Type"
                          value={clientProfile.client_type}
                        />
                        <InputRow
                          label="Date of Birth"
                          value={clientProfile.client_dob}
                        />
                        <InputRow
                          label="ABN"
                          value={checkNull(clientProfile.client_abn)}
                        />
                        <InputRow
                          label="ACN"
                          value={checkNull(clientProfile.client_acn)}
                        />
                      </div>
                      <SectionLabel label={"Contact"} />
                      <div className="grid gap-2 sm:grid-cols-2">
                        <InputRow
                          label="Email"
                          value={clientProfile.client_email}
                        />
                        <InputRow
                          label="Mobile"
                          value={clientProfile.client_mobile}
                        />
                        <InputRow
                          label="Address"
                          value={clientProfile.client_address}
                          className="sm:col-span-2"
                        />
                      </div>
                      <SectionLabel label={"Role and Authority"} />
                      <div className="grid gap-2 sm:grid-cols-2">
                        <InputRow
                          label="Acting Capacity"
                          value={checkNull(clientProfile.client_capacity)}
                        />
                        <InputRow
                          label="Authority Basis"
                          value={checkNull(clientProfile.client_authority)}
                        />
                        <InputRow
                          label="Instructing Person"
                          value={checkNull(
                            clientProfile.client_instructing_person,
                          )}
                        />
                      </div>
                      <SectionLabel label={"Entity / Trust Structure"} />
                      <div className="grid gap-2 sm:grid-cols-2">
                        <InputRow
                          label="Principal / Trust / Company"
                          value={checkNull(clientProfile.entity_name)}
                        />
                        <InputRow
                          label="Trustee"
                          value={checkNull(clientProfile.entity_trustee)}
                        />
                        <InputRow
                          label="Trustee Type"
                          value={checkNull(clientProfile.entity_type)}
                        />
                        <InputRow
                          label="Registered Address"
                          value={checkNull(clientProfile.entity_address)}
                        />
                        <InputRow
                          label="Directors / Beneficial Owners"
                          value={checkDirectors(clientProfile.entity_directors)}
                        />
                      </div>
                      <SectionLabel label={"Matter Context"} />
                      <div className="grid gap-2 sm:grid-cols-2">
                        <InputRow
                          label="Purpose of Engagement"
                          value={checkNull(clientProfile.matter_purpose)}
                        />
                        <InputRow
                          label="Expected Duration"
                          value={checkNull(clientProfile.matter_duration)}
                        />
                        <InputRow
                          label="Expected Transaction Frequency"
                          value={checkNull(clientProfile.matter_frequency)}
                        />
                        <InputRow
                          label="Trust Account Expected"
                          value={
                            clientProfile.matter_trust_expected === 0
                              ? "No"
                              : "Yes"
                          }
                        />
                        <InputRow
                          label="Matter Type"
                          value={checkNull(clientProfile.matter_type)}
                        />
                        <InputRow
                          label="Short Description"
                          value={checkNull(clientProfile.matter_description)}
                        />
                        <InputRow
                          label="Jurisdiction"
                          value={checkNull(clientProfile.matter_jurisdiction)}
                        />
                        <InputRow
                          label="Estimated Band Value"
                          value={
                            MATTER_BAND_VALUES.find(
                              (e) =>
                                e.value === clientProfile.matter_band_value,
                            ).label
                          }
                        />
                      </div>
                    </>
                  )}
                </Card>

                <Card title="Oversight" className="min-h-0 flex-1">
                  {/* <Oversight /> */}
                </Card>
              </div>

              {/* <Payments /> */}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClientProfile;
