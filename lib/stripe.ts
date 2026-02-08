import Stripe from "stripe";
import { getEvents } from "@/lib/content";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const getStripeClient = () => {
  if (!stripeSecretKey) {
    throw new Error("Stripe secret key is not configured.");
  }
  return new Stripe(stripeSecretKey, {
    apiVersion: "2026-01-28.clover"
  });
};

export const getPriceIdForTier = (tier: string) => {
  if (tier === "111") return process.env.STRIPE_PRICE_111;
  if (tier === "222") return process.env.STRIPE_PRICE_222;
  if (tier === "333") return process.env.STRIPE_PRICE_333;
  if (tier.startsWith("event:")) {
    const eventId = tier.replace("event:", "");
    const event = getEvents().find((item) => item.id === eventId);
    if (!event || !event.stripePriceEnv) return undefined;
    return process.env[event.stripePriceEnv];
  }
  return undefined;
};
