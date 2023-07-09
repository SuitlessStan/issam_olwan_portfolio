"use client"
import Image from "next/image"
import Navbar from "./navbar"
import Intro from "./intro"
import Caption from "./caption"

export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <Intro />
      <Caption />
    </div>
  )
}
