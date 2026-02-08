import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { ETransferForm } from "@/components/forms/e-transfer-form";

export const metadata = buildMetadata(
  "E-Transfer Payments",
  "Submit an E-Transfer payment reference for Angel Series Coaching.",
  "/pay/e-transfer"
);

export default function ETransferPage() {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h1 className="section-title">Pay via E-Transfer</h1>
          <p className="section-subtitle">
            Use the details below to send your payment. Booking is confirmed
            after payment verification.
          </p>
          <Card>
            <CardContent className="space-y-3 p-6 text-sm text-muted-foreground">
              <p>Bank: Placeholder Credit Union</p>
              <p>Recipient: payments@angelseriescoaching.com</p>
              <p>Reference format: ASC-YourName-Date</p>
              <p>Amount: Match your selected coaching tier</p>
              <p>
                After sending payment, submit your reference so we can confirm
                your booking.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Submit payment reference</h2>
          <ETransferForm />
        </div>
      </Container>
    </Section>
  );
}
