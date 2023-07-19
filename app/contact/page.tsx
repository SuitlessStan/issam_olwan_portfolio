"use client"
import axios from "axios"
import { useState } from "react"

export default function ContactMe() {
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = new FormData(e.currentTarget)
      await axios.post("http://localhost:3000/api/contact", data)

      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
    } catch (err) {
      console.error("Error sending request : ", err)
    }
    setLoading(false)
  }
  return (
    <>
      <div className="mx-2">
        <span className="text-4xl text-center block mt-20">Let&apos;s talk</span>
        <span className="text-xs md:text-lg text-center block my-2">
          If you are interested in my work or have any concerns, do not hesitate to send me a
          message!
        </span>
        <div className="flex justify-center items-center flex-col w-full z-100 absolute">
          {loading && <div className="circular-progress"></div>}
          {showAlert && (
            <div
              className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 w-full md:w-1/2"
              role="alert">
              <p className="font-bold">Message Sent</p>
              <p className="text-sm">Your message has been sent!</p>
            </div>
          )}
        </div>

        <div className="container my-5 dark:bg-Borders dark:text-white text-black bg-white px-4 rounded mx-auto md:w-2/5">
          <form
            action="http://localhost:3000/api/contact"
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
                placeholder="+"
              />
            </div>
            <div className="input flex flex-col gap-3 justify-center items-start">
              <label htmlFor="name" className="font-DMSans">
                Your email
              </label>
              <input
                className="w-full dark:bg-Rellenos py-4 px-4 border border-Gris rounded"
                type="email"
                name="email"
                placeholder="something@somewhat.com"
              />
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
                placeholder="Your message"></textarea>
            </div>
            <div className="input flex flex-col gap-3 justify-center items-start">
              <button
                type="submit"
                // onClick={(e) => e.preventDefault()}
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
