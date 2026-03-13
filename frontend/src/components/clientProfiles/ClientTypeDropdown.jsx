import TYPES from "./ClientTypes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ClientTypeDropdown = ({ profileDraft, setProfileDraft, fieldKey }) => {
  return (
    <Select
      value={TYPES.find((e) => e.type === profileDraft[fieldKey]).type}
      onValueChange={(value) => {
        setProfileDraft((prev) => ({ ...prev, [fieldKey]: value }));
      }}
    >
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none border-slate-200 px-2.5 py-1.5 text-sm">
        <SelectValue
          placeholder={
            TYPES.find((e) => e.type === profileDraft[fieldKey]).label
          }
        />
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

export default ClientTypeDropdown;
