export const siteConfig = {
  name: "Angel Series Coaching",
  description:
    "Health optimization coaching focused on structured exercise, intentional nutrition, and sustainable habits.",
  shortDescription:
    "Health optimization coaching for strength, recovery, and long-term consistency.",
  coachType: "Health Optimization",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "http://localhost:3000",
  contact: {
    email: "Poczikeric@gmail.com",
    phone: "801-317-9862",
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
