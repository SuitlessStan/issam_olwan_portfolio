"use client"
import Intro from "./intro"
import Caption from "../components/caption"
import AboutMe from "./about-me"

export default function Home() {
  return (
    <>
      <main>
        <Intro />
        <Caption />
      </main>
      <section>
        <AboutMe />
      </section>
    </>
  )
}
