import { Request, Response } from "express";
import sendEmail from "../services/mailgun";

// Send a code to the user email address to verify that user owns the email
const sendCode = (req: Request, res: Response) => {
  const email = req.body.email;
  const code = Math.floor(Math.random() * 90000) + 10000; // generates a 5 digit number
  const html = `
  <p>Please verify your email address by entering this code:</p>
  <h1 style="letter-spacing: 4px;">${code}</h1>
  <p>If you did not request to create an account at pagser.com with this email address, 
  please ignore this email.</p>
  `;

  req.session.userEmailVerificationCode = code;

  sendEmail(email, "Verify your email address", html, (msg, info) => {
    if (msg === "success") {
      res.status(200).send({ message: "code sent" });
    } else {
      res.status(500).send();
    }
  });
};

// Sends a message to client to indicate that the username is available
const usernameAvailability = (req: Request, res: Response) => {
  res.status(200).send({ message: "username is available" });
};

const controller = { sendCode, usernameAvailability };

export default controller;
