import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { buildMetadata } from "@/lib/metadata";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Container, Section } from "@/components/sections/section";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { Badge } from "@/components/ui/badge";

export const generateStaticParams = async () => {
  return getAllPosts().map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}) => {
  const post = getPostBySlug(params.slug);
  if (!post) return buildMetadata("Not found");
  return buildMetadata(post.title, post.description, `/resources/blog/${post.slug}`);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <Section>
      <Container className="max-w-3xl space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </div>
        <article className="prose prose-neutral max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
              }
            }}
          />
        </article>
      </Container>
    </Section>
  );
}
