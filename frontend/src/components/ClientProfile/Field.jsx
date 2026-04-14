import { Controller } from "react-hook-form";
import BooleanDropdown from "./BooleanDropdown";
import BandDropdown from "./BandDropdown";
import ClientTypeDropdown from "./ClientTypeDropdown";
import { DatePicker } from "./DatePicker";
import { useState } from "react";

const Dropdowns = {
  boolean: BooleanDropdown,
  band: BandDropdown,
  type: ClientTypeDropdown,
  date: DatePicker,
};
const Field = ({ fieldKey, type, control }) => {
  const [focusedField, setFocusedField] = useState(null);

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
      <Controller
        name={fieldKey}
        control={control}
        render={({ field, fieldState }) => (
          <textarea
            {...field}
            value={field.value ?? ""}
            rows={3}
            className={`mt-0.5 w-full rounded-md border px-2.5 py-1.5 text-sm focus:outline-none ${fieldState.error ? "border-red-500" : "border-slate-200"}`}
          />
        )}
      />
    );
  }

  return (
    <Controller
      name={fieldKey}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <input
            {...field}
            value={field.value ?? ""}
            type="text"
            onFocus={() => setFocusedField(fieldKey)}
            onBlur={() => setFocusedField(null)}
            className={`mt-0.5 w-full rounded-md border px-2.5 py-1.5 text-sm focus:outline-none ${fieldState.error ? "border-red-500" : "border-slate-200"}`}
          />
          {fieldState.error && focusedField === fieldKey && (
            <span className="mt-1 text-xs text-red-600">
              {fieldState.error.message}
            </span>
          )}
        </>
      )}
    />
  );
};

export default Field;
