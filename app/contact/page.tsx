import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = buildMetadata(
  "Contact",
  "Get in touch with Angel Series Coaching for questions or bookings.",
  "/contact"
);

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">
            Send a message and we will respond within 1-2 business days.
          </p>
          <ContactForm />
        </div>
        <Card className="h-fit">
          <CardContent className="space-y-4 p-6">
            <h2 className="text-lg font-semibold">Direct contact</h2>
            <p className="text-sm text-muted-foreground">
              Email: {siteConfig.contact.email}
              <br />
              Phone: {siteConfig.contact.phone}
            </p>
            <Link
              href={siteConfig.contact.facebookGroup}
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Join the Facebook group
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
