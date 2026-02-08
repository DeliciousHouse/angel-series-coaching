import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";
import { Badge } from "@/components/ui/badge";
import { SchedulerEmbed } from "@/components/sections/scheduler-embed";

export const metadata = buildMetadata(
  "Book",
  "Schedule your Angel Series Coaching session after payment.",
  "/book"
);

export default function BookPage() {
  return (
    <Section>
      <Container className="space-y-6">
        <Badge>Book</Badge>
        <h1 className="section-title">Book your coaching session</h1>
        <p className="section-subtitle">
          If you have completed payment, choose a time that works for you. You
          will receive a confirmation email with next steps.
        </p>
        <SchedulerEmbed />
      </Container>
    </Section>
  );
}
