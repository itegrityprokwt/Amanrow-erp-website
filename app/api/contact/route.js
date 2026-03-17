// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, company, message } = await req.json();

//     await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to: "irshatha908@gmail.com",
//       subject: "New Contact Message",
//       html: `
//         <h2>New Message</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Company:</b> ${company}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//     });

//     return Response.json({ success: true });
//   } catch (error) {
//     return Response.json({ success: false });
//   }
// }