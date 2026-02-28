import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordian = ({ items }) => {
  return (
    <div>
      <Accordion className="space-y-3" type="single" collapsible>
        {items.map((items, index) => {
          return (
            <AccordionItem
              className="w-full rounded-2xl border border-slate-200/70 px-4 bg-white/70 text-left text-[13px] text-slate-700 transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              value={"item-" + index}
            >
              <AccordionTrigger>{items.question}</AccordionTrigger>
              <AccordionContent>{items.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQAccordian;
