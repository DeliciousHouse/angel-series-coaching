import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripeClient, getPriceIdForTier } from "@/lib/stripe";
import { getEvents } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";

const schema = z.object({
  tier: z.string(),
  email: z.string().email().optional()
});

export const runtime = "nodejs";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid checkout request." },
        { status: 400 }
      );
    }

    if (parsed.data.tier.startsWith("event:")) {
      const eventId = parsed.data.tier.replace("event:", "");
      const event = getEvents().find((item) => item.id === eventId);
      if (!event) {
        return NextResponse.json({ error: "Event not found." }, { status: 404 });
      }
      if (event.price <= 0) {
        return NextResponse.json(
          { error: "This event is free. Please register on the events page." },
          { status: 400 }
        );
      }
    }

    const priceId = getPriceIdForTier(parsed.data.tier);
    if (!priceId) {
      return NextResponse.json(
        { error: "Pricing configuration is missing." },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();
    const siteUrl = getSiteUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: parsed.data.email,
      success_url: `${siteUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/services`,
      metadata: {
        tier: parsed.data.tier
      }
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Unable to start checkout." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to start checkout." },
      { status: 500 }
    );
  }
};
