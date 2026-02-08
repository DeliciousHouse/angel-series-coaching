type NewsletterResult = {
  provider: "mailchimp" | "convertkit" | "email-only";
};

export const subscribeToNewsletter = async (email: string): Promise<NewsletterResult> => {
  const mailchimpKey = process.env.MAILCHIMP_API_KEY;
  const mailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;
  const mailchimpServer = process.env.MAILCHIMP_SERVER_PREFIX;

  if (mailchimpKey && mailchimpAudience && mailchimpServer) {
    const response = await fetch(
      `https://${mailchimpServer}.api.mailchimp.com/3.0/lists/${mailchimpAudience}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${mailchimpKey}`).toString("base64")}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed"
        })
      }
    );

    if (!response.ok && response.status !== 400) {
      throw new Error("Mailchimp subscription failed.");
    }

    return { provider: "mailchimp" };
  }

  const convertkitKey = process.env.CONVERTKIT_API_KEY;
  const convertkitFormId = process.env.CONVERTKIT_FORM_ID;

  if (convertkitKey && convertkitFormId) {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${convertkitFormId}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          api_key: convertkitKey,
          email
        })
      }
    );
    if (!response.ok) {
      throw new Error("ConvertKit subscription failed.");
    }
    return { provider: "convertkit" };
  }

  return { provider: "email-only" };
};
