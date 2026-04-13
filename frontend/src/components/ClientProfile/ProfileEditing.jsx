import PROFILE_FIELDS from "../../constants/profileFields";
import InputRow from "./InputRow";
import SectionField from "./SectionField";

const ProfileEditing = ({ entityDirectors, checkDirectors, control }) => {
  const sections = ["client", "contact", "role", "entity", "matter"];

  const fieldsBySection = sections.reduce((acc, sectionKey) => {
    acc[sectionKey] = PROFILE_FIELDS.filter((f) => f.section === sectionKey);
    return acc;
  }, {});

  return (
    <>
      {sections.map((sectionKey) => {
        const fields = fieldsBySection[sectionKey];

        if (fields.length === 0) return null;

        return (
          <div key={sectionKey} className="mt-2">
            <SectionField
              sectionKey={sectionKey}
              fields={fields}
              control={control}
            />
          </div>
        );
      })}
      {
        <div className="mt-2">
          <InputRow
            label="Directors / Beneficial Owners"
            value={checkDirectors(entityDirectors)}
          />
        </div>
      }
    </>
  );
};

export default ProfileEditing;
