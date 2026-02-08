import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export const metadata = buildMetadata(
  "Resources",
  "Explore blog articles and downloadable resources from Angel Series Coaching.",
  "/resources"
);

export default function ResourcesPage() {
  return (
    <>
      <Section>
        <Container className="space-y-6">
          <h1 className="section-title">Resources</h1>
          <p className="section-subtitle">
            Insights, tools, and downloads to support your growth between sessions.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Blog</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>Practical coaching insights, mindset tools, and reflections.</p>
                <Button asChild variant="outline">
                  <Link href="/resources/blog">Read the blog</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Downloads</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>Guides and templates you can use right away.</p>
                <Button asChild variant="outline">
                  <Link href="/resources/downloads">View downloads</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="section-title">Weekly clarity notes</h2>
            <p className="section-subtitle">
              Join the newsletter for new resources, coaching tips, and events.
            </p>
            <NewsletterForm />
          </div>
          <Card className="bg-brand-50">
            <CardContent className="space-y-4 p-8">
              <h3 className="text-xl font-semibold">Lead magnet placeholder</h3>
              <p className="text-sm text-muted-foreground">
                Share a short guide or checklist here. We recommend a 1-2 page
                PDF download that delivers immediate value.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  );
}
