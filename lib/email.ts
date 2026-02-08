import nodemailer from "nodemailer";
import { Resend } from "resend";

type SendEmailArgs = {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
};

const getSmtpTransport = () => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!host || !port || !user || !pass) return null;
  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass }
  });
};

export const sendEmail = async ({ to, subject, html, text, replyTo }: SendEmailArgs) => {
  const from = process.env.RESEND_FROM_EMAIL || process.env.SMTP_FROM_EMAIL;
  if (!from) {
    throw new Error("Email sender is not configured.");
  }

  const resend = getResendClient();
  if (resend) {
    await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      replyTo
    });
    return;
  }

  const transport = getSmtpTransport();
  if (!transport) {
    throw new Error("No email provider is configured.");
  }

  await transport.sendMail({
    from,
    to,
    subject,
    html,
    text,
    replyTo
  });
};

export const sendAdminEmail = async (
  subject: string,
  html: string,
  replyTo?: string
) => {
  const admin = process.env.ADMIN_EMAIL;
  if (!admin) {
    throw new Error("ADMIN_EMAIL is not configured.");
  }
  await sendEmail({ to: admin, subject, html, replyTo });
};
