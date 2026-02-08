import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn("mt-10 text-2xl font-semibold")} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("mt-8 text-xl font-semibold")} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-relaxed text-muted-foreground")} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("list-disc space-y-2 pl-6 text-muted-foreground")} {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("list-decimal space-y-2 pl-6 text-muted-foreground")} {...props} />
  ),
  a: ({ href = "#", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href}
      className="font-semibold text-brand-600 hover:text-brand-700"
      {...props}
    />
  ),
  Button
};
