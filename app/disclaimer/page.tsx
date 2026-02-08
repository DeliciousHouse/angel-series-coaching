import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";

export const metadata = buildMetadata(
  "Disclaimer",
  "Coaching disclaimer and boundaries.",
  "/disclaimer"
);

export default function DisclaimerPage() {
  return (
    <Section>
      <Container className="max-w-3xl space-y-6">
        <h1 className="section-title">Disclaimer</h1>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Coaching is not therapy, counseling, medical advice, or legal advice.
            If you need mental health support, please contact a licensed provider.
          </p>
          <p>
            Angel Series Coaching focuses on goals, habits, and personal growth.
            You are responsible for your decisions and actions.
          </p>
          <p>
            Coaching is not a substitute for professional services. If you are in
            crisis or need immediate support, contact emergency services.
          </p>
        </div>
      </Container>
    </Section>
  );
}
