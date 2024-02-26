import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();
    const { name, email, subject, phone, message } = body;


    if (!name || !email || !subject || !phone || !message) {
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
      subject: subject,
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
            src="https://rds-isolierungen.vercel.app/logo.png"
            alt="logo"
            style="width: 117px; height: 47px; margin: 0 auto"
          />
        </header>

        <main style="margin: 30px">
          <h2 style="
            color: #333333;
            font-size: 24px;
          ">
            Bestätigung Ihrer Anfrage
          </h2>

          <p
            style="
              margin-top: 20px;
              line-height: 1.6;
              color: #333333;
            "
          >
            Sehr geehrte/r Kunde/in
            <span style="font-weight: 800; text-transform: capitalize;">${name}</span>
          </p>
          
          <p
            style="
              margin-top: 20px;
              line-height: 1.6;
              color: #333333;
            "
          >
            Vielen Dank für Ihre Anfrage bei RDS Isolierungen. 
            Wir haben Ihr Anliegen erhalten und werden uns innerhalb der nächsten 24 Stunden mit Ihnen in Verbindung setzen, um weitere Details zu besprechen.
          </p>
          
          <p
            style="
              margin-top: 20px;
              line-height: 1.6;
              color: #333333;
            "
          >
            Während Sie auf unsere Rückmeldung warten, laden wir Sie ein, mehr über unsere umfassenden Dienstleistungen auf unserer Webseite zu entdecken. Für eventuelle Fragen stehen wir Ihnen gerne zur Verfügung. Wir freuen uns auf die Gelegenheit, mit Ihnen zusammenzuarbeiten und Ihre Anforderungen im Bereich Isolierungen zu unterstützen.
          </p>

          <p style="margin-top: 20px; color: #333333; font-weight: 800;">
            Ihr RDS Isolierungen Team
          </p>
        </main>

        <footer style="margin: 30px">
          <p style="color: #999999; margin-top: 10px;">
            * Dies ist eine automatische E-Mail. Bitte nicht darauf antworten.
          </p>

          <p style="margin-top: 20px; color: #999999">
            &copy; ${new Date().getFullYear()} RDS Isolierungen. Alle Rechte vorbehalten.
          </p>
        </footer>
      </section>`,
    };

    const mailOptionsToYou = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'Neues Kontaktformular Übermittlung',
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
              src="https://rds-isolierungen.vercel.app/logo.png"
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
              ${phone}
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
              Ihr RDS Isolierungen Team
            </p>
          </main>

          <footer style="margin: 30px">
            <p style="margin-top: 20px; color: #999999">
              &copy; ${new Date().getFullYear()} RDS Isolierungen. Alle Rechte vorbehalten.
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
