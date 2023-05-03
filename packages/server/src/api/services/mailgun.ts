import mailgun from "mailgun-js";
import keys from "../../config/keys.js";

const DOMAIN = "email.pagser.com";

// Mailgun configuration
const mg = mailgun({
  apiKey: keys.mailgunApiKey as string,
  domain: DOMAIN,
});

// Send an email to any address
const sendEmail = (to: string, subject: string, html: string) => {
  return new Promise(function (resolve, reject) {
    const data = {
      from: "Pagser <noreply@email.pagser.com>",
      to,
      subject: subject,
      html: html,
    };

    mg.messages().send(data, function (error, body) {
      if (error) {
        return reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

export default sendEmail;
