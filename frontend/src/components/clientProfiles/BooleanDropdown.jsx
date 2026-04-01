import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { memo } from "react";

const BooleanDropdown = ({ value, onChange }) => {
  return (
    <Select
      value={value ? "yes" : "no"}
      onValueChange={(val) => {
        onChange(val === "yes" ? true : false);
      }}
    >
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none border-slate-200 px-2.5 py-1.5 text-sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="yes">Yes</SelectItem>
          <SelectItem value="no">No</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default memo(BooleanDropdown);
