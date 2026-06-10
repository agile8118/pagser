import path from "path";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { render } from "cpeak";
import keys from "../../../config/keys.js";

const ses = new SESClient({ region: keys.awsRegion });

// cwd is always packages/server
const TEMPLATES_DIR = path.join(
  path.resolve(),
  "src/api/services/email/templates",
);

export const FROM_NOREPLY = "Pagser <no-reply@pagser.com>";
export const FROM_INFO = "Pagser <info@pagser.com>";

type HtmlTemplate = { htmlFile: string; templateData: Record<string, unknown> };

// Sends an HTML email via SES. Pass a raw HTML string or a { htmlFile, templateData }
// object to render a template from the './templates' directory using Cpeak's renderToString.
const sendEmail = async (
  to: string,
  subject: string,
  html: string | HtmlTemplate,
  from = FROM_NOREPLY,
) => {
  if (process.env.SKIP_EMAIL === "true") return;
  const htmlStr =
    typeof html === "string"
      ? html
      : await render.string(
          `${TEMPLATES_DIR}/${html.htmlFile}.html`,
          html.templateData,
        );

  await ses.send(
    new SendEmailCommand({
      Source: from,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: subject },
        Body: { Html: { Data: htmlStr } },
      },
    }),
  );
};

export default sendEmail;
