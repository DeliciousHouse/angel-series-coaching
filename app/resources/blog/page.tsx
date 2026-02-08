import { buildMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import { Container, Section } from "@/components/sections/section";
import { BlogFilter } from "@/components/sections/blog-filter";

export const metadata = buildMetadata(
  "Blog",
  "Read coaching insights, clarity tools, and growth strategies.",
  "/resources/blog"
);

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Section>
      <Container className="space-y-6">
        <h1 className="section-title">Coaching insights</h1>
        <p className="section-subtitle">
          Practical guidance for clarity, boundaries, and focused growth.
        </p>
        <BlogFilter posts={posts} />
      </Container>
    </Section>
  );
}
