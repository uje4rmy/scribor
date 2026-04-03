import { memo } from "react";
import { Controller } from "react-hook-form";
import BooleanDropdown from "./BooleanDropdown";
import BandDropdown from "./BandDropdown";
import ClientTypeDropdown from "./ClientTypeDropdown";
import { DatePicker } from "./DatePicker";

const Field = ({ fieldKey, type, control, register }) => {
  return (
    <>
      {type === "boolean" ? (
        <Controller
          name={fieldKey}
          control={control}
          render={({ field }) => (
            <BooleanDropdown value={field.value} onChange={field.onChange} />
          )}
        />
      ) : type === "textarea" ? (
        <textarea
          {...register(fieldKey)}
          rows={3}
          className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
        />
      ) : type === "band" ? (
        <Controller
          name={fieldKey}
          control={control}
          render={({ field }) => (
            <BandDropdown value={field.value} onChange={field.onChange} />
          )}
        />
      ) : type === "type" ? (
        <Controller
          name={fieldKey}
          control={control}
          render={({ field }) => (
            <ClientTypeDropdown value={field.value} onChange={field.onChange} />
          )}
        />
      ) : type === "date" ? (
        <Controller
          name={fieldKey}
          control={control}
          render={({ field }) => (
            <DatePicker value={field.value} onChange={field.onChange} />
          )}
        />
      ) : (
        <input
          {...register(fieldKey)}
          type="text"
          className="mt-0.5 w-full rounded-md border border-slate-200 px-2.5 py-1.5 text-sm"
        />
      )}
    </>
  );
};

export default memo(Field);
