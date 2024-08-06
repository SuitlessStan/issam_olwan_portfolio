"use client"
import Intro from "./intro"
import Caption from "../components/caption"
import AboutMe from "./about-me"

export default function Home() {
  return (
    <>
      <main>
        <Intro />
        <Caption className="hidden md:block" />
      </main>
      <section>
        <AboutMe className="hidden md:block" />
      </section>
    </>
  )
}
