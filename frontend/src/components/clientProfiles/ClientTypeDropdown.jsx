import CLIENT_TYPES from "../../constants/clientTypes";
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
      value={CLIENT_TYPES.find((e) => e.type === value).type}
      onValueChange={(val) => {
        onChange(val);
      }}
    >
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none border-slate-200 px-2.5 py-1.5 text-sm">
        <SelectValue
          placeholder={CLIENT_TYPES.find((e) => e.type === value).label}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {CLIENT_TYPES.map((e) => (
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
