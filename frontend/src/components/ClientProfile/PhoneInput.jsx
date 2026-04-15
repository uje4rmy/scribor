import { Input } from "@/components/ui/input";
import ReactCountryFlag from "react-country-flag";

const PhoneInput = ({ fieldKey, field, fieldState, setFocusedField }) => (
  <div
    className={`flex items-center border border-input rounded-md ${fieldState.error ? "border-red-500" : "border-slate-200 focus-within:ring-1 focus-within:ring-ring"}`}
  >
    <div className="flex items-center px-3 border-r border-input gap-1">
      <ReactCountryFlag
        countryCode="AU"
        svg={true}
        className="rounded-sm"
        style={{ width: "1.5em", height: "1.5em" }}
      />
      <span className="text-sm text-muted-foreground pr-3 cursor-default">
        +61
      </span>
    </div>
    <Input
      {...field}
      onFocus={() => setFocusedField(fieldKey)}
      onBlur={() => setFocusedField(null)}
      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      placeholder="Enter a phone number"
      type="tel"
    />
  </div>
);
export default PhoneInput;
