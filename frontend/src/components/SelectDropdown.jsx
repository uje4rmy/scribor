import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";
import ReactCountryFlag from "react-country-flag";

const SelectDropdown = ({ value, onChange, options, placeholder }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none bg-white border-slate-200 px-2.5 py-1.5 text-sm data-[placeholder]:text-black">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-h-60 overflow-y-auto">
        <SelectGroup>
          {options.map((e) => (
            <SelectItem key={e.value} value={e.value}>
              {e.name ? (
                <div className="flex gap-2">
                  <ReactCountryFlag
                    countryCode={e.countryCode}
                    svg={true}
                    className="rounded-sm"
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                  <span>{`${e.name} (${e.value})`}</span>
                </div>
              ) : e.label ? (
                e.label
              ) : (
                e.value
              )}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(SelectDropdown);
