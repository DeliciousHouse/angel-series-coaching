import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata(
  "About",
  "Learn about the story, methodology, and credentials behind Angel Series Coaching.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Badge>About</Badge>
            <h1 className="section-title">A grounded approach to meaningful growth.</h1>
            <p className="section-subtitle">
              Angel Series Coaching was created to help high-achievers reset,
              refocus, and move with intention. The process blends compassion with
              structure so you can build momentum without burnout.
            </p>
            <p className="text-sm text-muted-foreground">
              Placeholder story: After years of supporting leaders and creators,
              Angel recognized that clarity is often the missing link. This
              coaching practice was built to offer a calm, strategic space for
              alignment and action.
            </p>
          </div>
          <Image
            src="/images/coach-placeholder.svg"
            alt="Professional coach"
            width={800}
            height={1000}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rounded-3xl shadow-lift"
          />
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="grid gap-6 lg:grid-cols-3">
          {[
            "ICF-aligned coaching training (placeholder)",
            "Leadership development certification (placeholder)",
            "Mindfulness and habit design coursework (placeholder)"
          ].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>Qualification</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item}
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          <div>
            <h2 className="section-title">Coaching methodology</h2>
            <p className="section-subtitle">
              A clear framework that keeps you focused, supported, and moving forward.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Clarity first",
                copy: "Define your priorities and eliminate distractions."
              },
              {
                title: "Aligned action",
                copy: "Create a plan that fits your energy and season."
              },
              {
                title: "Compassionate accountability",
                copy: "Stay consistent with supportive check-ins."
              },
              {
                title: "Evidence-based tools",
                copy: "Apply frameworks that build lasting habits."
              },
              {
                title: "Sustainable growth",
                copy: "Pace yourself for progress that lasts."
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
          </div>
        </Container>
      </Section>
    </>
  );
}
