import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, eventTitle, date, time, location } = body;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: `Reminder: ${eventTitle}`,
      html: `
        <h2>FindMap Reminder</h2>
        <p><strong>${eventTitle}</strong></p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Location:</strong> ${location}</p>
      `,
    });

    return Response.json({ success: true, result });
  } catch (error: any) {
    console.error("SEND REMINDER ERROR:", error);
    return Response.json(
      { success: false, message: error?.message || "Error sending email" },
      { status: 500 }
    );
  }
}