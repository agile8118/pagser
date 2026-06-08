import path from "path";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { render } from "cpeak";

const ses = new SESClient({ region: "us-east-1" });

// cwd is always packages/server
const TEMPLATES_DIR = path.join(
  path.resolve(),
  "src/api/services/email/templates",
);

export const FROM_NOREPLY = "Pagser <no-reply@pagser.udcc-demo.com>";
export const FROM_INFO = "Pagser <info@pagser.udcc-demo.com>";

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
