import Image from "next/image"
import ProfilePicture from "../public/images/profile-picture.jpg"
import Link from "next/link"
import LensEffectText from "@/components/lens-effect"

const rainbowAnimation = () => <span className="rainbow-animation text-3xl">ISSAM</span>

export default function AboutMe() {
  return (
    <>
      <div className="container flex flex-col md:flex-row gap-5 mx-auto px-3">
        <div className="profile-image flex justify-center items-center  md:hidden">
          <Image
            className="rounded w-full h-full"
            alt="profile_picture"
            src={ProfilePicture}
            placeholder="blur"
            width={300}
            height={300}
          />
        </div>
        <div className="about-me">
          <LensEffectText>
            {`Hi, I'm `}
            {rainbowAnimation()}
            {`. a Full Stack Software Engineer. I excel in teamwork and delivering exceptional digital solutions, focusing on efficient code and innovative collaborations.`}
          </LensEffectText>
          <button
            type="button"
            className="btn my-2 md:hidden flex gap-3 border dark:border-white border-black text-black dark:text-white rounded py-2 px-2  hover:bg-primio hover:border-primio">
            <Link href="/about" className="flex justify-center items-center gap-2">
              <span className="pb-1 dark:p-0">See More</span>
              <svg
                className="dark:hidden"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.16667 2.91663L12.25 6.99996M12.25 6.99996L8.16667 11.0833M12.25 6.99996L1.75 6.99996"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}
