import { memo } from "react";
import { Controller } from "react-hook-form";
import BooleanDropdown from "./BooleanDropdown";
import BandDropdown from "./BandDropdown";
import ClientTypeDropdown from "./ClientTypeDropdown";
import { DatePicker } from "./DatePicker";

const Dropdowns = {
  boolean: BooleanDropdown,
  band: BandDropdown,
  type: ClientTypeDropdown,
  date: DatePicker,
};
const Field = ({ fieldKey, type, control, register }) => {
  if (Dropdowns[type]) {
    const Dropdown = Dropdowns[type];
    return (
      <Controller
        name={fieldKey}
        control={control}
        render={({ field }) => (
          <Dropdown value={field.value} onChange={field.onChange} />
        )}
      />
    );
  }

  if (type === "textarea") {
    return (
      <textarea
        {...register(fieldKey)}
        rows={3}
        className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
      />
    );
  }

  return (
    <input
      {...register(fieldKey)}
      type="text"
      className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
    />
  );
};

export default memo(Field);
