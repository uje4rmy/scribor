import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LogDropdown = ({ value, valKey, options, setLogDraft, placeholder }) => {
  return (
    <Select
      value={value}
      onValueChange={(e) =>
        setLogDraft((f) => ({
          ...f,
          [valKey]: e,
        }))
      }
    >
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none bg-white border-slate-200 px-2.5 py-1.5 text-sm data-[placeholder]:text-black">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((e) => (
            <SelectItem key={e.value} value={e.value}>
              {e.label ? e.label : e.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LogDropdown;
