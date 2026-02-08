import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StripeCheckoutButton } from "@/components/forms/stripe-checkout-button";

export const metadata = buildMetadata(
  "Services",
  "Explore three coaching tiers designed for clarity, momentum, and transformation.",
  "/services"
);

const tiers = [
  {
    id: "111",
    price: "$111",
    title: "Clarity Session",
    who: "Perfect for quick alignment, decision-making, and focus resets.",
    format: "Virtual (Zoom) or in-person by request",
    length: "60 minutes",
    includes: ["Personalized clarity map", "Priority list", "Session summary"],
    support: "Email check-in for 7 days after the session.",
    outcomes: [
      "Clear next steps",
      "Reduced overwhelm",
      "Confidence to move forward"
    ]
  },
  {
    id: "222",
    price: "$222",
    title: "Momentum Package",
    who: "Ideal for achieving a specific goal with consistent accountability.",
    format: "Virtual (Zoom) or in-person by request",
    length: "Two 60-minute sessions",
    includes: ["Goal framework", "Habit design plan", "Progress review"],
    support: "Email support between sessions with 48-hour response time.",
    outcomes: ["Consistency with goals", "Stronger habits", "Accountability support"]
  },
  {
    id: "333",
    price: "$333",
    title: "Deep Transformation",
    who: "Best for major transitions, leadership growth, or long-term change.",
    format: "Virtual (Zoom) or in-person by request",
    length: "Three 60-minute sessions",
    includes: ["Full coaching roadmap", "Mindset reframes", "Resource toolkit"],
    support: "Priority email support + voice note check-ins between sessions.",
    outcomes: [
      "Aligned decision-making",
      "Sustainable momentum",
      "Long-term clarity"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Container className="space-y-6">
          <Badge>Services</Badge>
          <h1 className="section-title">Choose your coaching experience</h1>
          <p className="section-subtitle">
            Each tier blends strategy, reflection, and action. Select the support
            level that fits your goals.
          </p>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.id} className="flex h-full flex-col">
              <CardHeader>
                <p className="text-sm font-semibold text-brand-600">{tier.price}</p>
                <CardTitle>{tier.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Who it’s for</p>
                  <p>{tier.who}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Session format</p>
                  <p>{tier.format}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Session length</p>
                  <p>{tier.length}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">What’s included</p>
                  <ul className="mt-2 space-y-1">
                    {tier.includes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Support between sessions
                  </p>
                  <p>{tier.support}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">What to expect</p>
                  <ul className="mt-2 space-y-1">
                    {tier.outcomes.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <StripeCheckoutButton tier={tier.id} label="Pay & Book" />
                  <Button asChild variant="outline">
                    <Link href="/pay/e-transfer">Pay via E-Transfer</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "1. Choose your tier",
              copy: "Select the coaching package that fits your goals."
            },
            {
              title: "2. Complete payment",
              copy: "Pay securely via Stripe or E-Transfer."
            },
            {
              title: "3. Book your session",
              copy: "Use the scheduler to reserve your session time."
            }
          ].map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {step.copy}
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="space-y-4">
          <h2 className="section-title">Policy summary</h2>
          <p className="section-subtitle">
            Reschedule up to 24 hours in advance. Cancellations within 24 hours
            are non-refundable. Payment confirms your booking eligibility.
          </p>
        </Container>
      </Section>
    </>
  );
}
