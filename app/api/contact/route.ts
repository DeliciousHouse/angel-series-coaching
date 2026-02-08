import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request";
import { sendAdminEmail } from "@/lib/email";
import { siteConfig } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5),
  website: z.string().optional(),
  subject: z.string().optional()
});

export const runtime = "nodejs";

export const POST = async (req: Request) => {
  const ip = getClientIp(req);
  const limit = rateLimit(`contact:${ip}`, 5, 15 * 60 * 1000);
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
      return NextResponse.json(
        { error: "Invalid form submission." },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const subject = parsed.data.subject || "New contact form submission";
    const html = `
      <h2>${subject}</h2>
      <p><strong>Name:</strong> ${parsed.data.name}</p>
      <p><strong>Email:</strong> ${parsed.data.email}</p>
      <p><strong>Phone:</strong> ${parsed.data.phone || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${parsed.data.message}</p>
      <p>Sent from ${siteConfig.name}</p>
    `;

    await sendAdminEmail(subject, html, parsed.data.email);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 }
    );
  }
};
