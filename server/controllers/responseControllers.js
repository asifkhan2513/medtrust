const Response = require("../models/response");
const mailSender = require("../utils/mailSender");
const { contactFormEmailTemplate } = require("../mails/templates/mailTempltes");
require("dotenv").config();

exports.createResponse = async (req, res) => {
  try {
    const { name, email, phone, message, countryCode, city, country } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const response = new Response({
      name,
      email,
      phone: phone || "",
      message,
      countryCode: countryCode || "",
      city: city || "",
      country: country || "",
    });
    await response.save();

    // Send email notification to admin
    const adminEmail = process.env.ADMIN_EMAIL || process.env.MAIL_USER;
    const subject = process.env.EMAIL_SUBJECT || "New Contact Form - MedTrust";
    const htmlBody = contactFormEmailTemplate(
      name,
      email,
      phone,
      message,
      countryCode,
      city,
      country
    );

    if (adminEmail && process.env.MAIL_PASS) {
      try {
        await mailSender(adminEmail, subject, htmlBody);

      } catch (mailErr) {
        console.error("Failed to send contact form email:", mailErr.message);
        // Response still saved - email failure logged
      }
    } else if (!adminEmail) {
      console.warn("ADMIN_EMAIL not set - skipping email notification");
    }

    res.status(201).json({
      success: true,
      message: "Thank you! We will get back to you soon.",
      response: { id: response._id },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
      error: error.message,
    });
  }
};
