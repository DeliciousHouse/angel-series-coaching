import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getDownloads } from "@/lib/content";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata(
  "Downloads",
  "Download coaching guides and templates from Angel Series Coaching.",
  "/resources/downloads"
);

export default function DownloadsPage() {
  const downloads = getDownloads();

  return (
    <Section>
      <Container className="space-y-6">
        <h1 className="section-title">Downloads</h1>
        <p className="section-subtitle">
          Practical tools you can use right away.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {downloads.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{item.description}</p>
                <p>
                  {item.type} · {item.size}
                </p>
                <Button asChild variant="outline">
                  <Link href={item.file}>Download</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
