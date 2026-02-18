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
        url: "/images/logo.svg",
        width: 280,
        height: 200,
        alt: "Angel Series Coaching Network"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/logo.svg"]
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
