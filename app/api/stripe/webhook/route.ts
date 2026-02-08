import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeClient } from "@/lib/stripe";
import { sendAdminEmail, sendEmail } from "@/lib/email";
import { getSiteUrl } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const POST = async (req: Request) => {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured." },
      { status: 400 }
    );
  }

  const stripe = getStripeClient();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Webhook not configured." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  const body = await req.text();

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail =
      session.customer_email || session.customer_details?.email || "";
    const tier = session.metadata?.tier || "coaching";
    const siteUrl = getSiteUrl();

    try {
      if (customerEmail) {
        await sendEmail({
          to: customerEmail,
          subject: "Your coaching payment is confirmed",
          html: `
            <p>Thanks for your purchase. Your next step is to book your session.</p>
            <p><a href="${siteUrl}/book">Book your session</a></p>
            <p>Reference: ${session.id}</p>
          `
        });
      }

      await sendAdminEmail(
        "Stripe payment confirmed",
        `<p>New payment for ${tier}. Session ID: ${session.id}.</p>`
      );
    } catch (error) {
      // Avoid failing the webhook due to email issues.
    }
  }

  return NextResponse.json({ received: true });
};
