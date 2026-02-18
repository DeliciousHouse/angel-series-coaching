import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" }
];

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/pay/e-transfer", label: "E-Transfer" }
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-3 lg:px-16">
        <div className="space-y-3">
          <Link href="/" className="block">
            <Image
              src="/images/logo.svg"
              alt={siteConfig.name}
              width={160}
              height={57}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            {siteConfig.shortDescription}
          </p>
          <div className="text-sm text-muted-foreground">
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.phone}</p>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Connect
          </h4>
          <p className="text-sm text-muted-foreground">
            Join our Facebook group for updates and community support.
          </p>
          <Link
            href={siteConfig.social.facebook}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Facebook Group
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
