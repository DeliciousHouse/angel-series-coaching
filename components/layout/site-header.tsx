"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt={siteConfig.name}
            width={1536}
            height={1024}
            sizes="140px"
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/book">Schedule a Consultation</Link>
          </Button>
        </nav>
        <button
          className="inline-flex items-center justify-center rounded-full border border-border p-2 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          "border-t border-border bg-background lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col gap-4 px-6 py-6 sm:px-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/book">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
