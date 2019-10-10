const mailgun = require("mailgun-js");
const DOMAIN = "sandbox39848b9913124df4adc3bca6ca11e196.mailgun.org";

const mg = mailgun({
  apiKey: "7425816db4a5201bd14e404f89753913-bbbc8336-908cf395",
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
