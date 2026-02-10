import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let name, email, mobile, company, message, enquiryFor, role, location, project, otherRole, resume;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      // career page ke liye "fullName", contact ke liye "name"
      name = (formData.get("fullName") || formData.get("name")) as string;
      email = formData.get("email") as string;
      mobile = formData.get("mobile") as string; // <--- Extracting mobile
      company = formData.get("company") as string;
      message = formData.get("message") as string;
      enquiryFor = formData.get("enquiryFor") as string;
      role = formData.get("role") as string;
      location = formData.get("location") as string;
      project = formData.get("project") as string;
      otherRole = formData.get("otherRole") as string;
      resume = formData.get("resume") as File | null;
    } 
    else {
      const body = await request.json();
      ({ name, email, mobile, company, message, enquiryFor } = body);
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions: Options;

    if (resume && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: "Support@avolvelabs.com",
        replyTo: email,
        subject: `Career: ${role === 'Other' ? otherRole : role} - ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
            <h2 style="color: #032d60;">New Career Application</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile || "Not Provided"}</p> <p><strong>Location:</strong> ${location}</p>
            <p><strong>Role:</strong> ${role === 'Other' ? otherRole : role}</p>
            <hr />
            <p><strong>Career Objective:</strong></p>
            <p>${project}</p>
          </div>
        `,
        attachments: [{ filename: resume.name, content: buffer }],
      };
    } else {
      mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: "Support@avolvelabs.com",
        replyTo: email,
        subject: `Enquiry: ${enquiryFor || 'General Website Inquiry'}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
            <h3>New Website Inquiry</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${mobile || "N/A"}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `,
      };
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ msg: "Form submitted successfully", flag: 1 });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Error occurred";
    console.error("API ERROR:", error);
    return NextResponse.json({ msg: errorMessage, flag: 0 }, { status: 500 });
  }
}