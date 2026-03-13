import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StatusFilter = ({ statusFilter, setStatusFilter }) => {
  return (
    <Select value={statusFilter} onValueChange={setStatusFilter}>
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none border-slate-200 px-2.5 py-1.5 text-sm">
        <SelectValue placeholder={"All"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="complete">Complete</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="flagged">Flagged</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusFilter;
