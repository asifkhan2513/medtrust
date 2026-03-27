const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (toEmail, subject, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT, 10) || 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"MedTrust" <${process.env.MAIL_USER}>`,
      to: toEmail,
      subject,
      html: body,
    });

   
    return info;
  } catch (err) {
    console.error("Mail send error:", err.message);
    throw err;
  }
};

module.exports = mailSender;
