import type { Metadata } from "next";
import { siteConfig, getSiteUrl } from "./site";

const siteUrl = getSiteUrl();

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-placeholder.svg",
        width: 1200,
        height: 700,
        alt: "Angel Series Coaching"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/hero-placeholder.svg"]
  }
};

export const buildMetadata = (
  title: string,
  description?: string,
  path?: string
): Metadata => {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  return {
    title,
    description: description || siteConfig.description,
    openGraph: {
      title,
      description: description || siteConfig.description,
      url
    },
    twitter: {
      title,
      description: description || siteConfig.description
    }
  };
};
