import PROFILE_FIELDS from "../../../../components/clientProfiles/ProfileFields";
import SectionLabel from "../../../../components/clientProfiles/SectionLabel";
import BooleanDropdown from "../../../../components/clientProfiles/BooleanDropdown";
import InputRow from "../../../../components/clientProfiles/InputRow";
import BandDropdown from "../../../../components/clientProfiles/BandDropdown";
import ClientTypeDropdown from "../../../../components/clientProfiles/ClientTypeDropdown";

function getSectionKey(sectionKey) {
  switch (sectionKey) {
    case "client":
      return "Client Details";
    case "contact":
      return "Contact";
    case "role":
      return "Role and Authority";
    case "entity":
      return "Entity / Trust Structure";
    default:
      return "Matter Context";
  }
}

const ProfileEditing = ({
  clientProfile,
  profileDraft,
  setProfileDraft,
  checkDirectors,
}) => {
  const sections = ["client", "contact", "role", "entity", "matter"];

  return (
    <>
      {sections.map((sectionKey) => {
        const sectionLabel = getSectionKey(sectionKey);
        const fields = PROFILE_FIELDS.filter((f) => f.section === sectionKey);

        if (fields.length === 0) return null;

        return (
          <div key={sectionKey}>
            <SectionLabel label={sectionLabel} />
            <div className="grid gap-2 sm:grid-cols-2">
              {fields.map(({ key, label, type }) => (
                <div
                  key={key}
                  className={type === "textarea" ? "sm:col-span-2" : ""}
                >
                  <label className="block text-xs text-slate-500">
                    {label}
                  </label>
                  {type === "boolean" ? (
                    <BooleanDropdown
                      profileDraft={profileDraft}
                      setProfileDraft={setProfileDraft}
                      fieldKey={key}
                    />
                  ) : type === "textarea" ? (
                    <textarea
                      value={profileDraft[key] ?? ""}
                      onChange={(e) =>
                        setProfileDraft((d) => ({
                          ...d,
                          [key]: e.target.value,
                        }))
                      }
                      rows={3}
                      className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                    />
                  ) : type === "band" ? (
                    <BandDropdown
                      profileDraft={profileDraft}
                      setProfileDraft={setProfileDraft}
                      fieldKey={key}
                    />
                  ) : type === "type" ? (
                    <ClientTypeDropdown
                      profileDraft={profileDraft}
                      setProfileDraft={setProfileDraft}
                      fieldKey={key}
                    />
                  ) : (
                    <input
                      type={key === "client_dob" ? "date" : "text"}
                      value={profileDraft[key] ?? ""}
                      onChange={(e) =>
                        setProfileDraft((d) => ({
                          ...d,
                          [key]: e.target.value,
                        }))
                      }
                      className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
      {
        <div className="mt-2">
          <InputRow
            label="Directors / Beneficial Owners"
            value={checkDirectors(clientProfile.entity_directors)}
          />
        </div>
      }
    </>
  );
};

export default ProfileEditing;
