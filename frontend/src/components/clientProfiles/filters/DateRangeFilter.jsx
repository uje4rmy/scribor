import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DateRangeFilter = ({ payments, dateRange, setDateRange }) => {
  return (
    <Select value={dateRange} onValueChange={setDateRange}>
      <SelectTrigger className="mt-0.5 w-full rounded-md border shadow-none border-slate-200 px-2.5 py-1.5 text-sm">
        <SelectValue placeholder={"All"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          {Array.from(
            new Set(
              payments.map((p) => new Date(p.payment_date).getFullYear()),
            ),
          ).map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DateRangeFilter;
