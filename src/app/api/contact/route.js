import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    if (request.method === "POST") {
      const { name, email, subject, msg } = await request.json();

      if (!name || !email || !subject || !msg) {
        return NextResponse.json(
          { message: "Bad Request: Missing required fields" },
          { status: 400 }
        );
      }

      try {
        await transporter.sendMail({
          ...mailOptions,
          subject: subject,
          text: msg,
          html: `<p>${msg}</p>`,
        });
        return NextResponse.json({ success: true }, { status: 200 });
      } catch (err) {
        return NextResponse.json(
          { message: "Internal Server Error" },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
