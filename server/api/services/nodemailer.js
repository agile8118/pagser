const nodemailer = require("nodemailer");
const { passGmail } = require("../../config/keys");

var sendEmail = (to, subject, html, callback) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pagher.info@gmail.com",
      pass: passGmail
    }
  });

  const mailOptions = {
    from: "Pagher", // sender address
    to, // list of receivers
    subject, // Subject line
    html // plain text body
  };

  return transporter.sendMail(mailOptions, function(err, info) {
    if (err) callback("err", err);
    else callback("success", info);
  });
};

module.exports = sendEmail;
