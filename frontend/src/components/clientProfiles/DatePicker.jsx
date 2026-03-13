import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export function DatePicker({ profileDraft, setProfileDraft }) {
  const [open, setOpen] = React.useState(false);
  const profileDob = new Date(profileDraft.client_dob);

  return (
    <Field>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="mt-0.5 w-full font-normal rounded-md border shadow-none border-slate-200 px-2.5 py-1.5 text-sm data-[empty=true]:text-muted-foreground"
          >
            {format(profileDob, "PPP") ?? "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={profileDob}
            defaultMonth={profileDob}
            captionLayout="dropdown"
            onSelect={(selectedDate) => {
              setProfileDraft((prev) => ({
                ...prev,
                client_dob: format(selectedDate, "yyyy-MM-dd"),
              }));
              setOpen(false);
            }}
            disabled={(date) => date > new Date()}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
