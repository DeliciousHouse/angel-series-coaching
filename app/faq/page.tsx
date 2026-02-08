import { buildMetadata } from "@/lib/metadata";
import { getFaqItems } from "@/lib/content";
import { Container, Section } from "@/components/sections/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export const metadata = buildMetadata(
  "FAQ",
  "Frequently asked questions about Angel Series Coaching.",
  "/faq"
);

export default function FAQPage() {
  const items = getFaqItems();
  return (
    <Section>
      <Container className="space-y-6 max-w-3xl">
        <h1 className="section-title">Frequently asked questions</h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
