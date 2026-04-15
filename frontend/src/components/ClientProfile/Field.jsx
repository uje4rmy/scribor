import { Controller } from "react-hook-form";
import { DatePicker } from "./DatePicker";
import { useState } from "react";
import PhoneInput from "./PhoneInput";
import { Input } from "@/components/ui/input";
import SelectDropdown from "../SelectDropdown";
import CLIENT_TYPES from "../../constants/clientTypes";
import MATTER_BAND_VALUES from "../../constants/bandValues";

const Dropdowns = ["trustExpected", "band", "clientType", "date"];

const matterTrustOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const Field = ({ fieldKey, type, control }) => {
  const [focusedField, setFocusedField] = useState(null);

  if (Dropdowns.includes(type)) {
    return (
      <Controller
        name={fieldKey}
        control={control}
        render={({ field }) => {
          switch (type) {
            case "trustExpected":
              return (
                <SelectDropdown
                  value={field.value ? "yes" : "no"}
                  onChange={(val) => {
                    field.onChange(val === "yes" ? true : false);
                  }}
                  options={matterTrustOptions}
                />
              );
            case "clientType":
              return (
                <SelectDropdown
                  value={
                    CLIENT_TYPES.find((e) => e.value === field.value).value
                  }
                  onChange={field.onChange}
                  options={CLIENT_TYPES}
                />
              );
            case "band":
              return (
                <SelectDropdown
                  value={
                    MATTER_BAND_VALUES.find((b) => b.value === field.value)
                      .value
                  }
                  onChange={(val) => field.onChange(parseInt(val))}
                  options={MATTER_BAND_VALUES}
                />
              );
            default:
              return (
                <DatePicker value={field.value} onChange={field.onChange} />
              );
          }
        }}
      />
    );
  }

  if (type === "textarea") {
    return (
      <div className="relative">
        <Controller
          name={fieldKey}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <textarea
                {...field}
                value={field.value ?? ""}
                rows={3}
                className={`mt-0.5 w-full rounded-md border px-2.5 py-1.5 text-sm resize-none focus:outline-none ${fieldState.error ? "border-red-500" : "border-slate-200"}`}
              />
              <span
                className={`absolute right-2 bottom-2 text-xs  ${field.value?.length > 100 ? "text-red-500" : "text-slate-400"}`}
              >
                {field.value?.length || 0}
                /100
              </span>
            </>
          )}
        />
      </div>
    );
  }

  return (
    <Controller
      name={fieldKey}
      control={control}
      render={({ field, fieldState }) => (
        <>
          {type === "phone" ? (
            <PhoneInput
              fieldKey={fieldKey}
              field={field}
              fieldState={fieldState}
              setFocusedField={setFocusedField}
            />
          ) : (
            <Input
              {...field}
              value={field.value ?? ""}
              type="text"
              onFocus={() => setFocusedField(fieldKey)}
              onBlur={() => setFocusedField(null)}
              className={`mt-0.5 w-full rounded-md border px-2.5 py-1.5 text-sm focus:outline-none shadow-none ${fieldState.error ? "border-red-500" : "border-slate-200"}`}
            />
          )}
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
