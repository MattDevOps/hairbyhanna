import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Hair By Hanna <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL!],
    subject: "New Appointment Request — Hair By Hanna",
    text: [
      `Name: ${payload.name || ""}`,
      `Phone: ${payload.phone || ""}`,
      `Email: ${payload.email || ""}`,
      `Service: ${payload.service || ""}`,
      `Preferred: ${payload.preferred || ""}`,
      `Message: ${payload.message || ""}`,
    ].join("\n"),
  });

  return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
}