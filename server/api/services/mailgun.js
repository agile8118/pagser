const mailgun = require("mailgun-js");
const keys = require("../../config/keys");
const DOMAIN = "email.pagher.com";

const mg = mailgun({
  apiKey: keys.mailgunApiKey,
  domain: DOMAIN
});

var sendEmail = (to, subject, html, callback) => {
  const data = {
    from: "Pagher <noreply@email.pagher.com>",
    to,
    subject: subject,
    html: html
  };

  mg.messages().send(data, function(error, body) {
    console.log(error);
    if (error) callback("error", error);
    else callback("success", body);
  });
};

module.exports = sendEmail;
