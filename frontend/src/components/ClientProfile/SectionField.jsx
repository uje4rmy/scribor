import { memo } from "react";
import SectionLabel from "./SectionLabel";
import Field from "./Field";

const SectionField = memo(({ sectionKey, fields, control, register }) => {
  function getSectionLabel(key) {
    switch (key) {
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

  return (
    <>
      <SectionLabel label={getSectionLabel(sectionKey)} />
      <div className="grid gap-2 sm:grid-cols-2">
        {fields.map(({ key, label, type }) => (
          <div key={key} className={type === "textarea" ? "sm:col-span-2" : ""}>
            <label className="block text-xs text-slate-500">{label}</label>
            <Field
              key={key}
              fieldKey={key}
              type={type}
              control={control}
              register={register}
            />
          </div>
        ))}
      </div>
    </>
  );
});

export default SectionField;
