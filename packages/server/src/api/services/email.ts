import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { AWS_REGION } from "../../config/keys.js";

const ses = new SESClient({ region: AWS_REGION });

export const FROM_NOREPLY = "Pagser <no-reply@pagser.com>";
export const FROM_INFO = "Pagser <info@pagser.com>";

const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  from = FROM_NOREPLY
) => {
  if (process.env.NODE_ENV === "test") return;
  await ses.send(
    new SendEmailCommand({
      Source: from,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: subject },
        Body: { Html: { Data: html } },
      },
    })
  );
};

export default sendEmail;
