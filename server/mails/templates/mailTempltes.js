const contactFormEmailTemplate = (
  name,
  email,
  phone,
  message,
  countryCode,
  city,
  country
) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #334155; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0d9488; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
        .label { font-weight: 600; color: #0f766e; margin-top: 16px; }
        .value { margin-top: 4px; }
        .message-box { background: white; padding: 16px; border-radius: 8px; margin-top: 8px; border-left: 4px solid #0d9488; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">New Contact Form Submission - MedTrust</h2>
        </div>
        <div class="content">
          <p>You have received a new message from the contact form:</p>
          
          <div class="label">Name</div>
          <div class="value">${name || "—"}</div>

          <div class="label">Email</div>
          <div class="value"><a href="mailto:${email}">${email}</a></div>

          <div class="label">Phone</div>
          <div class="value">${phone || "Not provided"}${countryCode ? ` (${countryCode})` : ""}</div>

          <div class="label">Country</div>
          <div class="value">${country || "Not provided"}</div>

          <div class="label">City / State</div>
          <div class="value">${city || "Not provided"}</div>

          <div class="label">Message</div>
          <div class="message-box">${(message || "").replace(/\n/g, "<br>")}</div>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = { contactFormEmailTemplate };
