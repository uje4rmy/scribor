import PROFILE_FIELDS from "../../../../components/clientProfiles/ProfileFields";
import InputRow from "../../../../components/clientProfiles/InputRow";
import { useMemo, memo } from "react";
import SectionField from "../../../../components/clientProfiles/SectionField";

const ProfileEditing = ({
  entityDirectors,
  checkDirectors,
  register,
  control,
}) => {
  const sections = useMemo(
    () => ["client", "contact", "role", "entity", "matter"],
    [],
  );

  const fieldsBySection = useMemo(() => {
    return sections.reduce((acc, sectionKey) => {
      acc[sectionKey] = PROFILE_FIELDS.filter((f) => f.section === sectionKey);
      return acc;
    }, {});
  }, [sections]);

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
              register={register}
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

export default memo(ProfileEditing);
