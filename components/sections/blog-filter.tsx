"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";

export const BlogFilter = ({ posts }: { posts: BlogPost[] }) => {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("all");

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    posts.forEach((post) => post.tags.forEach((t) => allTags.add(t)));
    return ["all", ...Array.from(allTags)];
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = tag === "all" || post.tags.includes(tag);
      const matchesQuery =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [posts, query, tag]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Input
          placeholder="Search posts"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="max-w-md"
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((item) => (
            <button
              key={item}
              onClick={() => setTag(item)}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                tag === item
                  ? "bg-brand-500 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>{post.description}</p>
              <Link
                href={`/resources/blog/${post.slug}`}
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
