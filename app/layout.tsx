import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./homepage/navbar"
import Footer from "./footer"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Technos Sophistes",
  description: "portfolio web application for Issam Olwan",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <Navbar />
        </section>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
