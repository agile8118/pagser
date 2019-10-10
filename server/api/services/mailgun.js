const mailgun = require("mailgun-js");
const keys = require("../../config/keys");
const DOMAIN = "email.pagher.com";

// Mailgun configuration
const mg = mailgun({
  apiKey: keys.mailgunApiKey,
  domain: DOMAIN
});

// Function to send emails
var sendEmail = (to, subject, html, callback) => {
  const data = {
    from: "Pagher <noreply@email.pagher.com>",
    to,
    subject: subject,
    html: html
  };

  mg.messages().send(data, function(error, body) {
    if (error) callback("error", error);
    else callback("success", body);
  });
};

module.exports = sendEmail;
