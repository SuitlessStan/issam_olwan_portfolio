"use client"
import axios from "axios"
import Link from "next/link"
import { useState, useRef } from "react"

const validatePhoneNumber = (number: string) => {
  if (!number || number.length < 5) {
    return "Please enter a valid phone number."
  }
}

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return email.trim() ? emailRegex.test(email) : false
}

const validateMessage = (message: string) => {
  if (!message.trim()) {
    return "Please enter a message."
  }
}

export default function ContactMe() {
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [error, setError] = useState("")
  const [sent, isSent] = useState(false)

  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState<{
    phoneNumberError: string | null | undefined
    emailError: string | null | undefined
    messageError: string | null | undefined
  }>({
    phoneNumberError: null,
    emailError: null,
    messageError: null,
  })

  const ref = useRef(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    scrollToTop()

    const { phoneNumber, email, message } = formData

    setFormErrors({
      phoneNumberError: validatePhoneNumber(phoneNumber),
      emailError: validateEmail(email) ? null : "Please enter a valid email",
      messageError: validateMessage(message),
    })

    if (formErrors.phoneNumberError || formErrors.emailError || formErrors.messageError) {
      setLoading(false)
      return
    }

    try {
      const data = new FormData(e.currentTarget)
      await axios.post("/api/contact", data)

      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
      setTimeout(() => isSent((prevState) => !prevState), 5000)
    } catch (err) {
      console.error("Error sending request : ", err)
      setError("Something went wrong while sending the message")
      setTimeout(() => setError(""), 3000)
    }
    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const { phoneNumber, email, message } = formData
  const { phoneNumberError, emailError, messageError } = formErrors

  return (
    <>
      <div className="mx-2">
        <span className="text-4xl text-center block mt-20" ref={ref}>
          Let&apos;s talk
        </span>
        <span className="text-xs md:text-lg text-center block my-2">
          If you are interested in my work or have any concerns, do not hesitate to send me a
          message!
        </span>
        <div className="message-progress">
          {loading && <div className="circular-progress"></div>}
          {showAlert && (
            <div
              className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3"
              role="alert">
              <p className="font-bold">Message Sent</p>
              <p className="text-sm">I&apos;ll be reaching out soon!</p>
            </div>
          )}
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert">
              <strong className="font-bold block">Oh no!</strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
        </div>

        <div className="container my-5 dark:bg-Borders dark:text-white text-black bg-white px-4 rounded mx-auto md:w-2/5">
          <form
            action="/api/contact"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="py-5 flex flex-col gap-3">
            <div className="input flex flex-col gap-3 justify-center items-start">
              <label htmlFor="number" className="font-DMSans">
                Your number
              </label>
              <input
                className="w-full dark:bg-Rellenos py-4 px-4 border border-Gris rounded"
                type="number"
                name="phoneNumber"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={handleChange}
              />
              {phoneNumberError && <span className="error text-red-400">{phoneNumberError}</span>}
            </div>
            <div className="input flex flex-col gap-3 justify-center items-start">
              <label htmlFor="name" className="font-DMSans">
                Your email
              </label>
              <input
                className="w-full dark:bg-Rellenos py-4 px-4 border border-Gris rounded"
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleChange}
              />
              {emailError && <span className="error text-red-400">{emailError}</span>}
            </div>
            <div className="input flex flex-col gap-3 justify-center items-start">
              <label htmlFor="name" className="font-DMSans">
                Your message
              </label>
              <textarea
                className="w-full dark:bg-Rellenos py-4 px-4 border border-Gris rounded"
                rows={4}
                color="50"
                name="message"
                style={{ resize: "none" }}
                value={message}
                onChange={handleChange}
                placeholder="Your message"></textarea>
              {messageError && <span className="error text-red-400">{messageError}</span>}
            </div>
            <div className="input flex flex-col gap-3 justify-center items-start">
              {sent && (
                <span className="text-md">
                  If you want to see your message you can do that{" "}
                  <Link
                    href="/me"
                    className="border-transparent border-b border-black dark:border-white pb-1">
                    {" "}
                    here
                  </Link>
                </span>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primio py-4 px-4 rounded text-white dark:text-black">
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
