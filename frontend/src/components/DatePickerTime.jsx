import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

export function DatePickerTime({
  date,
  time,
  setDate,
  setTime,
  error,
  setError,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <FieldGroup className="flex w-full flex-row gap-1">
      <Field>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className={`w-32 justify-between font-normal ${error ? "border-red-600 text-red-600 hover:text-red-600" : ""}`}
            >
              {date ? format(date, "PPP") : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                setError(false);
                setOpen(false);
              }}
              disabled={(date) => date > new Date()}
            />
          </PopoverContent>
        </Popover>
      </Field>

      <Field>
        <Input
          type="time"
          id="time-picker"
          step="1"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </Field>
    </FieldGroup>
  );
}
