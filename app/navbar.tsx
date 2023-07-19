"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<string>()
  const date = new Date()
  const router = useRouter()
  const href = "/"
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  })

  const timeOfDay = () => {
    const currentHour = date.getHours()

    if (currentHour >= 6 && currentHour < 20) {
      return "sunny"
    }
    return "not sunny"
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    router.push(href)
  }

  const handleLinkClick = () => {
    setOpen(false)
  }

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    setMode(prefersDarkMode ? "dark" : "light")

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (event: MediaQueryListEvent) => {
      const colorScheme = event.matches ? "dark" : "light"
      setMode(colorScheme)
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
    }

    return () => {}
  }, [])

  return (
    <nav className="dark:bg-black bg-white fixed w-full z-10 top-0 opacity-75">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="flex items-center justify-center gap-4">
          <span className="">
            {timeOfDay() == "sunny" ? (
              <Link href={href} onClick={handleClick}>
                <Image
                  className="dark:bg-primio rounded w-12"
                  src="/images/sun.svg"
                  alt="sun_gif"
                  width={22}
                  height={22}
                />
              </Link>
            ) : (
              <>
                <Link href={href} onClick={handleClick}>
                  <Image
                    className="dark:bg-primio rounded h-8 w-9"
                    src="/images/moon.svg"
                    alt="moon_gif"
                    width={22}
                    height={22}
                  />
                </Link>
              </>
            )}
          </span>
          <div className="flex flex-col">
            <span className="text-sm">{time}</span>
          </div>
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => {
            setOpen(!open)
          }}
          className="inline-flex items-center justify-center text-sm h-8 w-8 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={open ? "true" : "false"}>
          <span className="sr-only">Open main menu</span>
          {!open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6H20M4 12H20M13 18H20"
                stroke={`${mode === "dark" ? "white" : "black"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 6.12305L17 18.123L14.5 15.623L12 13.123M5 18.123L17 5.87695"
                stroke={`${mode === "dark" ? "white" : "black"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <div
          className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row mt-5 rounded-lg text-center md:space-x-8 md:mt-0 dark:bg-primio dark:md:bg-black border-gray-700">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
                className="block py-2 pl-3 pr-4 md:p-0 rounded font-Ubuntu text-sm md:text-lg border-b-4 border-transparent md:hover:border-primio transition-colors"
                aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="block py-2 pl-3 pr-4 md:p-0 rounded font-Ubuntu text-sm md:text-lg border-b-4 border-transparent md:hover:border-primio transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={handleLinkClick}
                className="block py-2 pl-3 pr-4 md:p-0 rounded font-Ubuntu text-sm md:text-lg border-b-4 border-transparent md:hover:border-primio transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="block py-2 pl-3 pr-4 md:p-0 rounded font-Ubuntu text-sm md:text-lg border-b-4 border-transparent md:hover:border-primio transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="dark:border-white border-black" />
    </nav>
  )
}
