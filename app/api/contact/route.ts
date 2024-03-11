import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;


    if (!name || !email || !subject || !message) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVICE, 
      secure: true,
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptionsToClient = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Confirmation of your request',
      html: `
      <section
        style="
          margin: 0 auto;
          padding: 50px;
          width: 480px;
          background-color: #FFFFFF;
          font-family: __Inter_a64ecd,__Inter_Fallback_a64ecd;
        "
      >
        <header style="margin: 30px;">
          <img
            src="https://gtechmech.vercel.app/logo.png"
            alt="logo"
            style="width: 117px; height: 47px; margin: 0 auto"
          />
        </header>

        <main style="margin: 30px">
          <h2 style="
            color: #333333;
            font-size: 24px;
          ">
            Confirmation of your request
          </h2>

          <p
            style="
              margin-top: 20px;
              line-height: 1.6;
              color: #333333;
            "
          >
            Dear customer
            <span style="font-weight: 800; text-transform: capitalize;">${name}</span>
          </p>
          
          <p
            style="
              margin-top: 20px;
              line-height: 1.6;
              color: #333333;
            "
          >
            Thank you for your inquiry to G-Tech Mechanical. 
            We have received your request and will be in touch with you within the next 24 hours to discuss further details.
          </p>
          
          <p
            style="
              margin-top: 20px;
              line-height: 1.6;
              color: #333333;
            "
          >
            While you wait for our response, we invite you to discover more about our comprehensive services on our website. We will be happy to answer any questions you may have. We look forward to the opportunity to work with you and support your insulation needs.
          </p>

          <p style="margin-top: 20px; color: #333333; font-weight: 800;">
            Your G-Tech Mechanical Team
          </p>
        </main>

        <footer style="margin: 30px">
          <p style="color: #999999; margin-top: 10px;">
            * This is an automated email. Please do not reply to it.
          </p>

          <p style="margin-top: 20px; color: #999999">
            &copy; ${new Date().getFullYear()} G-Tech Mechanical. All rights reserved.
          </p>
        </footer>
      </section>`,
    };

    const mailOptionsToYou = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'New contact form submission',
      html: `<section
          style="
            margin: 0 auto;
            padding: 50px;
            width: 480px;
            background-color: #f8f8f8;
            font-family: __Inter_a64ecd,__Inter_Fallback_a64ecd;
          "
        >
          <header style="margin: 30px;">
            <img
              src="https://gtechmech.vercel.app/logo.png"
              alt="logo"
              style="width: 117px; height: 47px; margin: 0 auto"
            />
          </header>

          <main style="margin: 30px">
            <h2 style="
              color: #333333;
              font-size: 24px;
            ">
              ${subject}
            </h2>

            <p
              style="
                margin-top: 20px;
                line-height: 1.6;
                color: #333333;
              "
            >
              New contact form submission from: 
              <span style="font-weight: 800; text-transform: capitalize;">${name}</span>
            </p>
            
            <p
              style="
                margin-top: 20px;
                line-height: 1.6;
                color: #333333;
              "
            >
              ${name}
            </p>
            
            <p
              style="
                margin-top: 20px;
                line-height: 1.6;
                color: #333333;
              "
            >
              ${message}
            </p>

            <p style="margin-top: 20px; color: #333333; font-weight: 800;">
              Your G-Tech Mechanical Team
            </p>
          </main>

          <footer style="margin: 30px">
            <p style="margin-top: 20px; color: #999999">
              &copy; ${new Date().getFullYear()} G-Tech Mechanical. All rights reserved.
            </p>
          </footer>
        </section>`,
    };


    await transporter.sendMail(mailOptionsToClient);
    await transporter.sendMail(mailOptionsToYou);


    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
 
    console.error(error);


    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
};
