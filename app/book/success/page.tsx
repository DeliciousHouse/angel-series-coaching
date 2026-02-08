import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SchedulerEmbed } from "@/components/sections/scheduler-embed";

export const metadata = buildMetadata(
  "Payment Success",
  "Your payment is confirmed. Book your coaching session.",
  "/book/success"
);

export default function BookSuccessPage({
  searchParams
}: {
  searchParams: { session_id?: string | string[] };
}) {
  const sessionId =
    typeof searchParams?.session_id === "string"
      ? searchParams.session_id
      : searchParams?.session_id?.[0];
  return (
    <Section>
      <Container className="space-y-6">
        <Card className="bg-brand-50">
          <CardContent className="space-y-3 p-6">
            <h1 className="text-2xl font-semibold">Payment confirmed</h1>
            <p className="text-sm text-muted-foreground">
              Thank you for your purchase. Your session is ready to be booked.
              {sessionId ? (
                <>
                  {" "}
                  Stripe reference: <span className="font-semibold">{sessionId}</span>
                </>
              ) : null}
            </p>
            <Button asChild>
              <Link href="/book">Book your session</Link>
            </Button>
          </CardContent>
        </Card>
        <SchedulerEmbed />
      </Container>
    </Section>
  );
}
