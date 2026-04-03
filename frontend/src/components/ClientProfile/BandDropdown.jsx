import MATTER_BAND_VALUES from "../../constants/bandValues";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";

const BandDropdown = ({ value, onChange }) => {
  return (
    <Select
      value={MATTER_BAND_VALUES.find((b) => b.value === value).value}
      onValueChange={(val) => onChange(parseInt(val))}
    >
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none border-slate-200 px-2.5 py-1.5 text-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {MATTER_BAND_VALUES.map((e) => (
            <SelectItem key={e.value} value={e.value}>
              {e.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(BandDropdown);
