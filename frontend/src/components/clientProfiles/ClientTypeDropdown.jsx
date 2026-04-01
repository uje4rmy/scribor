import TYPES from "./ClientTypes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";

const ClientTypeDropdown = ({ value, onChange }) => {
  return (
    <Select
      value={TYPES.find((e) => e.type === value).type}
      onValueChange={(val) => {
        onChange(val);
      }}
    >
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none border-slate-200 px-2.5 py-1.5 text-sm">
        <SelectValue placeholder={TYPES.find((e) => e.type === value).label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {TYPES.map((e) => (
            <SelectItem key={e.type} value={e.type}>
              {e.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(ClientTypeDropdown);
