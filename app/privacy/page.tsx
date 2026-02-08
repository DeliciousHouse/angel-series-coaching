import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";

export const metadata = buildMetadata(
  "Privacy Policy",
  "How Angel Series Coaching collects and uses your data.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl space-y-6">
        <h1 className="section-title">Privacy policy</h1>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Angel Series Coaching collects only the information needed to provide
            coaching services, respond to inquiries, and deliver resources.
          </p>
          <p>
            We may collect your name, email, phone number, and session preferences.
            Newsletter signups are used solely to deliver updates and resources.
          </p>
          <p>
            We use secure payment providers and do not store full payment details.
            Analytics tools may be used to understand site usage and improve your
            experience.
          </p>
          <p>
            You can request access, updates, or deletion of your data at any time
            by contacting us.
          </p>
        </div>
      </Container>
    </Section>
  );
}
