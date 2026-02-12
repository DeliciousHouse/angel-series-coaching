import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata(
  "About",
  "Learn more about Eric Poczik and his health optimization coaching approach.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <Badge>Health Optimization Coach</Badge>
            <h1 className="section-title">Meet Eric Poczik</h1>
            <p className="section-subtitle">
              I&apos;m Eric Poczik, a Health Optimization Coach. I help driven
              individuals reach their goals through structured exercise, intentional
              nutrition, and sustainable habits.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                My approach isn&apos;t about extremes or chasing quick fixes.
                It&apos;s about raising your standards, building systems that work,
                and developing the discipline to follow through. When your
                training, nutrition, and daily habits are aligned, results
                compound.
              </p>
              <p>
                I work with people who are ready to take responsibility for their
                health and stop negotiating with themselves. Together, we focus on
                optimizing the fundamentals - strength, recovery, consistency, and
                mindset - so the transformation lasts beyond any short-term
                program.
              </p>
              <p>
                To me, optimizing your health isn&apos;t just about how you look.
                It&apos;s about becoming sharper, stronger, and more in control of
                your life.
              </p>
            </div>
          </div>
          <Image
            src="/images/eric-coach-mindset.webp"
            alt="Eric Poczik in a mindfulness pose"
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
            "Structured exercise programming",
            "Intentional nutrition strategy",
            "Sustainable habit and accountability systems"
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
        <Container className="space-y-4">
          <div>
            <h2 className="section-title">Photo gallery</h2>
            <p className="section-subtitle">
              A quick look at Eric across coaching, practice, and community.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/eric-coach-portrait.webp",
                alt: "Eric Poczik smiling in a white shirt outdoors"
              },
              {
                src: "/images/eric-coach-mindset.webp",
                alt: "Eric Poczik in a mindfulness pose"
              },
              {
                src: "/images/eric-coach-community.webp",
                alt: "Eric Poczik smiling at a community event"
              }
            ].map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="h-full rounded-2xl object-cover shadow-lift"
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          <div>
            <h2 className="section-title">Our approach</h2>
            <p className="section-subtitle">
              Structured support, practical execution, and long-term consistency.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>A standards-driven coaching model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  The focus is simple: master the fundamentals and execute them
                  consistently enough for results to compound.
                </p>
                <ul className="space-y-2">
                  <li>• Build standards you can sustain</li>
                  <li>• Create systems you can repeat</li>
                  <li>• Execute with discipline and accountability</li>
                  <li>• Focus on long-term transformation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What we optimize together</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  We align your daily process so progress is measurable and
                  sustainable:
                </p>
                <ul className="space-y-2">
                  <li>• Strength</li>
                  <li>• Recovery</li>
                  <li>• Consistency</li>
                  <li>• Mindset</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>No quick fixes</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                This coaching is built around sustainable habits rather than
                extremes, so the results hold long after a short-term push.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Who this is for</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                People ready to take responsibility for their health and stop
                negotiating with themselves.
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
