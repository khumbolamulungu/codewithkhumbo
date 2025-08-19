import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactRequestBody>;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false, // Gmail uses STARTTLS on port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: `"${body.name}" <${body.email}>`,
      to: process.env.EMAIL_TO, // where you receive messages
      subject: "📩 New Contact Form Submission",
      text: `
        You have a new message:
        
        Name: ${body.name}
        Email: ${body.email}
        Message: ${body.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}



// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// interface ContactRequestBody {
//   name: string;
//   email: string;
//   message: string;
// }

// const DEFAULT_EMAIL = "khumboklein@gmail.com";

// export async function POST(request: NextRequest) {
//   try {
//     const body: ContactRequestBody = await request.json();

//     if (!body.name || !body.email || !body.message) {
//       return NextResponse.json(
//         { message: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `Contact Form <${process.env.EMAIL_USER}>`,
//       to: DEFAULT_EMAIL,
//       subject: `New message from ${body.name}`,
//       text: `From: ${body.name} (${body.email})\n\n${body.message}`,
//       html: `
//         <p><strong>Name:</strong> ${body.name}</p>
//         <p><strong>Email:</strong> ${body.email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${body.message}</p>
//       `
//     });

//     return NextResponse.json(
//       { message: "Message sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : "Failed to send message";

//     return NextResponse.json(
//       { message: errorMessage },
//       { status: 500 }
//     );
//   }
// }