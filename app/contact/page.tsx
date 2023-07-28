"use client"
import axios from "axios"
import { useState, useRef } from "react"

export default function ContactMe() {
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showError, setShowError] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [messageError, setMessageError] = useState<string | null>(null)

  const ref = useRef(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  const validatePhoneNumber = (number: string) => {
    if (!number || number.length < 5) {
      return "Please enter a valid phone number."
    }
    return null
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address."
    }
    return null
  }

  const validateMessage = (message: string) => {
    if (!message.trim()) {
      return "Please enter a message."
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    scrollToTop()

    try {
      const data = new FormData(e.currentTarget)
      await axios.post("/api/contact", data)

      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
    } catch (err) {
      console.error("Error sending request : ", err)

      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
    setLoading(false)
    setMessage("")
  }
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
          {showError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert">
              <strong className="font-bold block">Oh no!</strong>
              <span className="block sm:inline">
                Something went wrong while sending the message
              </span>
            </div>
          )}
        </div>

        <div className="container my-5 dark:bg-Borders dark:text-white text-black bg-white px-4 rounded mx-auto md:w-2/5">
          <form
            action="/api/contact"
            method="POST"
            onSubmit={handleSubmit}
            className="py-5 flex flex-col gap-3">
            <div className="input flex flex-col gap-3 justify-center items-start">
              <label htmlFor="number" className="font-DMSans">
                Your number
              </label>
              <input
                className="w-full dark:bg-Rellenos py-4 px-4 border border-Gris rounded"
                type="number"
                name="phone_number"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value)
                  setPhoneNumberError(validatePhoneNumber(e.target.value))
                }}
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
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError(validateEmail(e.target.value))
                }}
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
                onChange={(e) => {
                  setMessage(e.target.value)
                  setMessageError(validateMessage(e.target.value))
                }}
                placeholder="Your message"></textarea>
              {messageError && <span className="error text-red-400">{messageError}</span>}
            </div>
            <div className="input flex flex-col gap-3 justify-center items-start">
              <button
                type="submit"
                className="w-full bg-primio py-4 px-4 rounded text-white dark:text-black">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
