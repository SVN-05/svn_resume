import nodemailer from "nodemailer";
import { contactMessageFields } from "@/utils/constants/constants";

const email = "SEKARNAGARAJ74@GMAIL.COM";
const pass = "rfpckyfxaguivciy";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
