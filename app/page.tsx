import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { CTA } from "@/components/sections/cta";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getTestimonials } from "@/lib/content";

export const metadata = buildMetadata(
  "Home",
  "Coaching for clarity, focus, and calm momentum. Book a consultation or explore Angel Series Coaching services.",
  "/"
);

const services = [
  {
    tier: "$111",
    title: "Clarity Session",
    description: "A focused session to identify priorities and next steps.",
    items: ["Goal mapping", "Actionable roadmap", "Post-session summary"]
  },
  {
    tier: "$222",
    title: "Momentum Package",
    description: "Two sessions with structured accountability.",
    items: ["Two 60-min sessions", "Email support", "Custom habit plan"]
  },
  {
    tier: "$333",
    title: "Deep Transformation",
    description: "Ongoing support for major transitions and growth.",
    items: ["Three sessions", "Voice note check-ins", "Priority planning"]
  }
];

const testimonials = getTestimonials().slice(0, 3);

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          areaServed: "Worldwide",
          serviceType: "Coaching",
          offers: services.map((service) => ({
            "@type": "Offer",
            name: service.title,
            price: service.tier.replace("$", ""),
            priceCurrency: "USD"
          }))
        }}
      />
      <Hero />

      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Mission",
              copy: "Help high-achieving individuals create aligned goals and steady progress."
            },
            {
              title: "Vision",
              copy: "A world where clarity and confidence guide every meaningful decision."
            },
            {
              title: "Purpose",
              copy: "Support people in building lives and careers that feel grounded and intentional."
            }
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.copy}
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Badge>Meet your coach</Badge>
            <h2 className="section-title">Angel Series Coaching, led with heart.</h2>
            <p className="section-subtitle">
              A calm, strategic partner who blends compassionate coaching with
              clear action. Expect a safe space, honest reflections, and a plan
              you can trust.
            </p>
            <div className="rounded-2xl border border-dashed border-border bg-white p-4 text-sm text-muted-foreground">
              Optional video embed space for a short intro or reel.
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/coach-placeholder.svg"
              alt="Coach portrait placeholder"
              width={800}
              height={1000}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="rounded-3xl shadow-lift"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Coaching services</h2>
              <p className="section-subtitle">
                Choose the level of support that fits your goals.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <p className="text-sm font-semibold text-brand-600">
                    {service.tier}
                  </p>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="section-title">Client stories</h2>
              <p className="section-subtitle">
                Real results from focused, supportive coaching.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/testimonials">Read testimonials</Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  “{testimonial.quote}”
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="section-title">Free clarity guide + newsletter</h2>
            <p className="section-subtitle">
              Get a simple, powerful worksheet and weekly insights on boundaries,
              focus, and meaningful growth.
            </p>
            <NewsletterForm />
          </div>
          <Card className="bg-brand-50">
            <CardContent className="space-y-4 p-8">
              <h3 className="text-xl font-semibold">Lead magnet placeholder</h3>
              <p className="text-sm text-muted-foreground">
                Include a short PDF guide, ritual checklist, or clarity plan.
                Deliver automatically after signup.
              </p>
              <Button asChild variant="outline">
                <Link href="/resources/downloads">View resources</Link>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <CTA
        title="Ready to get started?"
        description="Book a consultation and design your coaching plan."
        primaryHref="/book"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
