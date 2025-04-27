import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqProps {
  faqData?: FAQ[];
}

export default function Faq({ faqData = [] }: FaqProps) {
  // Divide faqData into two parts
  const midIndex = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midIndex);
  const rightFaqs = faqData.slice(midIndex);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
      
      {/* Left Column */}
      <div className="flex flex-col gap-4 lg:gap-10">
        <Accordion type="single" collapsible className="flex flex-col gap-4 lg:gap-10">
          {leftFaqs.map((item, index) => (
            <AccordionItem key={`left-${index}`} value={`left-item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 lg:gap-10">
        <Accordion type="single" collapsible className="flex flex-col gap-4 lg:gap-10">
          {rightFaqs.map((item, index) => (
            <AccordionItem key={`right-${index}`} value={`right-item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  );
}
