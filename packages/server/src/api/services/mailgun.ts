import mailgun from "mailgun-js";
import keys from "../../config/keys";

const DOMAIN = "email.pagser.com";

// Mailgun configuration
const mg = mailgun({
  apiKey: keys.mailgunApiKey as string,
  domain: DOMAIN,
});

// Send an email to any address
const sendEmail = (
  to: string,
  subject: string,
  html: string,
  callback: (status: "error" | "success", body: any) => void
) => {
  const data = {
    from: "Pagser <noreply@email.pagser.com>",
    to,
    subject: subject,
    html: html,
  };

  mg.messages().send(data, function (error, body) {
    console.log(error);
    if (error) callback("error", error);
    else callback("success", body);
  });
};

export default sendEmail;
