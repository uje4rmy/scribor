import MATTER_BAND_VALUES from "../../components/clientProfiles/BandValues";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BandDropdown = ({ profileDraft, setProfileDraft, fieldKey }) => {
  return (
    <Select
      value={
        MATTER_BAND_VALUES.find((e) => e.value === profileDraft[fieldKey]).value
      }
      onValueChange={(value) =>
        setProfileDraft((prev) => ({
          ...prev,
          [fieldKey]: parseInt(value),
        }))
      }
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

export default BandDropdown;
