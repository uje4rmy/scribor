import Sidebar from "../../components/Sidebar";
import AppTopBar from "../../components/AppTopBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect, useMemo } from "react";
import Oversight from "../../components/ClientProfile/Oversight";
import Payments from "../../components/ClientProfile/Payments";
import ProfileEditing from "../../components/ClientProfile/ProfileEditing";
import SectionLabel from "../../components/ClientProfile/SectionLabel";
import InputRow from "../../components/ClientProfile/InputRow";
import MATTER_BAND_VALUES from "../../constants/bandValues";
import CLIENT_TYPES from "../../constants/clientTypes";
import { format } from "date-fns";
import Card from "../../components/ClientProfile/Card";
import { useParams } from "react-router";
import { createApi } from "../../components/utils/Api";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

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

function getDirtyFields(dirtyFields, draft) {
  const changed = {};
  Object.keys(dirtyFields).forEach((key) => {
    changed[key] = draft[key];
  });
  return changed;
}

const ClientProfile = () => {
  const [clientProfile, setClientProfile] = useState([]);
  const [payments, setPayments] = useState([]);
  const [profileEditing, setProfileEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLogPayment, setShowLogPayment] = useState(false);
  const [error, setError] = useState(null);

  const { user, isLoading, getAccessTokenSilently } = useAuth0();
  const api = useMemo(
    () => createApi(getAccessTokenSilently),
    [getAccessTokenSilently],
  );
  const { clientId } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, dirtyFields: boolDirty },
  } = useForm({ defaultValues: {} });

  useEffect(() => {
    if (isLoading || !user) return;

    const getMatters = async () => {
      try {
        const resProfile = await api.get("/matters/client-profile/" + clientId);
        const resPayments = await api.get("/payments/" + clientId);

        setClientProfile(resProfile.data[0]);
        setPayments(resPayments.data);
        reset(resProfile.data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMatters();
  }, [user, isLoading, clientId]);

  if (error) throw error;

  async function saveProfileEdit(formData) {
    try {
      const dirtyFields = {
        ...getDirtyFields(boolDirty, formData),
        client_id: clientProfile.client_id,
        matter_id: clientProfile.matter_id,
        entity_id: clientProfile.entity_id,
      };

      await api.put("/matters/update-client-profile/", dirtyFields);

      const newProfile = {
        ...clientProfile,
        ...dirtyFields,
      };
      setClientProfile(newProfile);
      reset(newProfile);
      setProfileEditing(false);
    } catch (error) {
      if (error.response?.status === 429) {
        toast.error(error.response?.data.message);
      }

      console.log(error);
    }
  }

  function cancelProfileEdit() {
    reset(clientProfile);
    setProfileEditing(false);
  }

  function startProfileEdit() {
    setProfileEditing(true);
  }

  async function handleLogPayment(formData, setError) {
    try {
      const { date, time } = formData.payment_date || {};
      if (!date) {
        // Date validation
        setError(true);
        return;
      }

      const newPaymentDate = `${format(date, "yyyy-MM-dd")} ${time}`;
      const payment = {
        ...formData,
        payment_date: newPaymentDate,
      };

      const res = await api.post(
        `/payments/${clientProfile.client_id}`,
        payment,
      );

      setPayments((prev) => [...prev, res.data]);
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
                <form
                  onSubmit={handleSubmit(saveProfileEdit)}
                  className="contents"
                >
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
                            type="submit"
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
                    <div className={profileEditing ? "block" : "hidden"}>
                      <ProfileEditing
                        entityDirectors={clientProfile.entity_directors}
                        checkDirectors={checkDirectors}
                        control={control}
                      />
                    </div>

                    <div className={!profileEditing ? "block" : "hidden"}>
                      <SectionLabel label={"Client Details"} />
                      <div className="grid gap-2 sm:grid-cols-2">
                        <InputRow
                          label="Full Name"
                          value={clientProfile.client_fullname}
                        />
                        <InputRow
                          label="Client Type"
                          value={
                            CLIENT_TYPES.find(
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
                            clientProfile.matter_trust_expected ? "Yes" : "No"
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
                    </div>
                  </Card>
                </form>

                <Card title="Oversight" className="min-h-0 flex-1">
                  <Oversight
                    clientProfile={clientProfile}
                    payments={payments}
                  />
                </Card>
              </div>

              <Payments
                payments={payments}
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
