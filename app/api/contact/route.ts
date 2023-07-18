import { NextResponse, NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello from contacts" }, { status: 200 })
}

export async function POST(request: NextRequest, response: NextResponse) {
  const formData = await request.formData()
  const emailValue = formData.get("email")
  const messageValue = formData.get("message")
  const numberValue = formData.get("number")

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
    from: `${emailValue}`,
    to: `${process.env.EMAIL}`,
    subject: `Message from contact me page from ${numberValue} - ${emailValue} `,
    text: `${messageValue}`,
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return NextResponse.json({ message: err }, { status: 500 })
    }
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  })
}
