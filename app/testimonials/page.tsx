import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { Container, Section } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTestimonials } from "@/lib/content";

export const metadata = buildMetadata(
  "Testimonials",
  "Read testimonials from Angel Series Coaching clients.",
  "/testimonials"
);

export default function TestimonialsPage() {
  const testimonials = getTestimonials().filter((t) => t.permission);

  return (
    <Section>
      <Container className="space-y-6">
        <Badge>Testimonials</Badge>
        <h1 className="section-title">Client experiences</h1>
        <p className="section-subtitle">
          Stories of clarity, confidence, and momentum from recent clients.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                {testimonial.photo ? (
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    sizes="56px"
                    className="rounded-full"
                  />
                ) : null}
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>“{testimonial.quote}”</p>
                {testimonial.videoUrl ? (
                  <div className="overflow-hidden rounded-xl border border-border">
                    <iframe
                      src={testimonial.videoUrl}
                      title={`${testimonial.name} testimonial`}
                      className="h-56 w-full"
                    />
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
