import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Navbar from "./navbar"
import Footer from "./footer"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Script from "next/script"
import "react-responsive-carousel/lib/styles/carousel.min.css"
config.autoAddCss = false

const roboto = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Issam Productions",
  description: "portfolio web application for Issam Olwan",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
        <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
