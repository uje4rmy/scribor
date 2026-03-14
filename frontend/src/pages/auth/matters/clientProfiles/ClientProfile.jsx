import Sidebar from "../../../../components/Sidebar";
import AppTopBar from "../../../../components/AppTopBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";
import Oversight from "./Oversight";
import Payments from "./Payments";
import ProfileEditing from "./ProfileEditing";
import SectionLabel from "../../../../components/clientProfiles/SectionLabel";
import InputRow from "../../../../components/clientProfiles/InputRow";
import MATTER_BAND_VALUES from "../../../../components/clientProfiles/BandValues";
import TYPES from "../../../../components/clientProfiles/ClientTypes";
import { format } from "date-fns";
import Card from "../../../../components/clientProfiles/Card";

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

const DEFAULT_LOG = {
  payment_date: "",
  payment_amount: "",
  payment_currency: "AUD",
  payment_paidby: "client",
  payment_payer_name: "",
  payment_destination: "trust",
  payment_method: "eft",
  payment_status: "complete",
  payment_ref: "",
  payment_flag: 0,
  payment_reason: "",
};

const ClientProfile = () => {
  const [clientProfile, setClientProfile] = useState([]);
  const [payments, setPayments] = useState([]);
  const [profileEditing, setProfileEditing] = useState(false);
  const [profileDraft, setProfileDraft] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLogPayment, setShowLogPayment] = useState(false);
  const [logDraft, setLogDraft] = useState({ ...DEFAULT_LOG });

  const { user, isLoading } = useAuth0();

  useEffect(() => {
    if (isLoading || !user) return;

    const getMatters = async () => {
      try {
        const userId = user.sub.split("|")[1];
        const res = await axios.get(
          "http://localhost:8081/api/matters/client-profile/" + userId,
        );

        const clientId = res.data[0].client_id;
        const resPay = await axios.get(
          "http://localhost:8081/api/payments/" + clientId,
        );

        setClientProfile(res.data[0]);
        setPayments(resPay.data);
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

  async function handleLogPayment(
    payDate,
    payTime,
    setError,
    setDate,
    setTime,
  ) {
    try {
      if (!payDate) {
        // Date validation
        setError(true);
        return;
      }

      const newPaymentDate = `${format(payDate, "yyyy-MM-dd")} ${payTime}`;
      const payment = {
        ...logDraft,
        client_id: clientProfile.client_id,
        payment_date: newPaymentDate,
      };

      const res = await axios.post(
        "http://localhost:8081/api/payments",
        payment,
      );

      setPayments((prev) => [...prev, res.data]);
      setLogDraft({ ...DEFAULT_LOG });
      setDate(undefined);
      setTime("12:00:00");
      setError(false);
      setShowLogPayment(false);
    } catch (error) {
      console.log(error);
    }
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
                          value={
                            TYPES.find(
                              (e) => e.type === clientProfile.client_type,
                            )?.label
                          }
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
                            )?.label ?? ""
                          }
                        />
                      </div>
                    </>
                  )}
                </Card>

                <Card title="Oversight" className="min-h-0 flex-1">
                  <Oversight
                    clientProfile={clientProfile}
                    payments={payments}
                  />
                </Card>
              </div>

              <Payments
                payments={payments}
                logDraft={logDraft}
                setLogDraft={setLogDraft}
                showLogPayment={showLogPayment}
                setShowLogPayment={setShowLogPayment}
                handleLogPayment={handleLogPayment}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClientProfile;
