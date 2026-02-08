import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request";
import { sendAdminEmail, sendEmail } from "@/lib/email";
import { subscribeToNewsletter } from "@/lib/newsletter";

const schema = z.object({
  email: z.string().email()
});

export const runtime = "nodejs";

export const POST = async (req: Request) => {
  const ip = getClientIp(req);
  const limit = rateLimit(`newsletter:${ip}`, 5, 15 * 60 * 1000);
  if (!limit.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    await subscribeToNewsletter(parsed.data.email);

    await sendEmail({
      to: parsed.data.email,
      subject: "You're subscribed to Angel Series Coaching",
      html: `
        <p>Thank you for subscribing. You'll receive new resources and updates soon.</p>
        <p>If you have any questions, reply to this email.</p>
      `
    });

    await sendAdminEmail(
      "New newsletter signup",
      `<p>New subscriber: ${parsed.data.email}</p>`
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to subscribe at this time." },
      { status: 500 }
    );
  }
};
