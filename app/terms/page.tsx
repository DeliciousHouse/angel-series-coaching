import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";

export const metadata = buildMetadata(
  "Terms of Service",
  "Terms, cancellations, refunds, and payment policies.",
  "/terms"
);

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl space-y-6">
        <h1 className="section-title">Terms of service</h1>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            By booking coaching services, you agree to these terms. Payment is
            required in advance to secure a session time.
          </p>
          <p>
            Reschedules are permitted up to 24 hours before your session. Late
            cancellations or no-shows are non-refundable.
          </p>
          <p>
            Coaching does not guarantee specific outcomes. Your results depend on
            participation, effort, and circumstances.
          </p>
          <p>
            If you need support between sessions, email support is available based
            on your chosen tier.
          </p>
        </div>
      </Container>
    </Section>
  );
}
