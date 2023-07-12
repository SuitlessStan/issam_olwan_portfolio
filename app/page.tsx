"use client"
import Navbar from "./homepage/navbar"
import Intro from "./homepage/intro"
import Caption from "../components/caption"
import AboutMe from "./homepage/about-me"

export default function Home() {
  return (
    <>
      <main>
        <Intro />
      </main>
      <Caption />
      <AboutMe />
      <footer></footer>
    </>
  )
}
