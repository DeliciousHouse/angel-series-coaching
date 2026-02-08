import { NextResponse } from "next/server";
import { z } from "zod";
import { getEvents } from "@/lib/content";
import { sendAdminEmail, sendEmail } from "@/lib/email";

const schema = z.object({
  eventId: z.string(),
  name: z.string().min(2),
  email: z.string().email()
});

export const runtime = "nodejs";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid registration details." },
        { status: 400 }
      );
    }

    const event = getEvents().find((item) => item.id === parsed.data.eventId);
    if (!event) {
      return NextResponse.json({ error: "Event not found." }, { status: 404 });
    }
    if (event.price > 0) {
      return NextResponse.json(
        { error: "This event requires payment." },
        { status: 400 }
      );
    }

    await sendEmail({
      to: parsed.data.email,
      subject: `You're registered: ${event.title}`,
      html: `
        <p>Hi ${parsed.data.name},</p>
        <p>You're registered for ${event.title}.</p>
        <p>Date: ${event.start}</p>
        <p>Location: ${event.location}</p>
        <p>We'll send additional details soon.</p>
      `
    });

    await sendAdminEmail(
      "New event registration",
      `<p>${parsed.data.name} (${parsed.data.email}) registered for ${event.title}.</p>`,
      parsed.data.email
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to register right now." },
      { status: 500 }
    );
  }
};
