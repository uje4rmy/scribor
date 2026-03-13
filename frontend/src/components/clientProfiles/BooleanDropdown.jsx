import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BooleanDropdown = ({ profileDraft, setProfileDraft, fieldKey }) => {
  return (
    <Select
      value={
        profileDraft[fieldKey] === 1
          ? "yes"
          : profileDraft[fieldKey] === 0
            ? "no"
            : ""
      }
      onValueChange={(value) => {
        setProfileDraft((prev) => ({
          ...prev,
          [fieldKey]: value === "yes" ? 1 : 0,
        }));
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

export default BooleanDropdown;
