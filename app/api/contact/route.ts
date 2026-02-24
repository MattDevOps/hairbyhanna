import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());

  // For now: log on server. Next step: email this to the owner (Resend).
  console.log("Appointment request:", payload);

  return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
}