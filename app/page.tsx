"use client"
import Navbar from "./navbar"
import Intro from "./intro"
import Caption from "./caption"
import AboutMe from "./about-me"

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
      </main>
      <Caption />
      <AboutMe />
    </>
  )
}
