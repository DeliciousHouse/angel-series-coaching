export const siteConfig = {
  name: "Angel Series Coaching",
  description:
    "Premium coaching for clarity, focus, and aligned momentum. Personal guidance, practical tools, and supportive accountability.",
  shortDescription: "Coaching for clarity, focus, and aligned momentum.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000",
  contact: {
    email: "hello@angelseriescoaching.com",
    phone: "+1 (555) 555-0115",
    facebookGroup: "https://www.facebook.com/groups/angelseriescoaching"
  },
  social: {
    facebook: "https://www.facebook.com/groups/angelseriescoaching"
  }
};

export const getSiteUrl = () => {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000"
  );
};
