import { NextResponse, NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello from contacts" }, { status: 200 })
}

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData()

  const emailValue = formData.get("email")
  const messageValue = formData.get("message")
  const numberValue = formData.get("phone_number")

  if (!messageValue || !numberValue || !emailValue) {
    return NextResponse.json({ message: "please fill all required fields!" }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const mailOptions = {
    from: `My Portfolio`,
    to: `${process.env.EMAIL}`,
    subject: `Message from ${numberValue} - ${emailValue} `,
    text: `${messageValue}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }

  /*
  Promis-ified solution - It looks nice but its not as clean 
  */
  // return new Promise((resolve) => {
  //   transporter.sendMail(mailOptions, (err) => {
  //     const status = err ? 500 : 200
  //     const message = err?.toString() ?? "Email sent successfully!"
  //     resolve(NextResponse.json({ message }, { status }))
  //   })
  // })
}
