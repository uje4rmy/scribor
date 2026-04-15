import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";

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
              {e.label ? e.label : e.name ? `${e.name} (${e.value})` : e.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(SelectDropdown);
