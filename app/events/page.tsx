import { buildMetadata } from "@/lib/metadata";
import { getEvents } from "@/lib/content";
import { Container, Section } from "@/components/sections/section";
import { EventsView } from "@/components/sections/events-view";

export const metadata = buildMetadata(
  "Events",
  "Upcoming workshops and coaching events for Angel Series Coaching.",
  "/events"
);

export default function EventsPage() {
  const events = getEvents().sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );
  return (
    <Section>
      <Container className="space-y-6">
        <h1 className="section-title">Events calendar</h1>
        <p className="section-subtitle">
          Join live workshops and community sessions. Paid events include
          immediate registration via Stripe.
        </p>
        <EventsView events={events} />
      </Container>
    </Section>
  );
}
