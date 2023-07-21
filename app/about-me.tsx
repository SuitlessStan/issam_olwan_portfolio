import Image from "next/image"
import ProfilePicture from "../public/images/profile-picture.jpg"
import Link from "next/link"

export default function AboutMe() {
  return (
    <>
      <div className="container flex flex-col md:flex-row gap-5 mx-auto p-5">
        <div className="profile-image flex justify-center items-center px-5 md:hidden">
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
          <span className="font-bold text-3xl my-2">About me</span>
          <br />
          <span className="my-2">
            Welcome! I&apos;m <span className="rainbow-animation text-xl">ISSAM</span>. A Full Stack
            Software Engineer who thrives on collaborative work and delivering outstanding digital
            solutions. With expertise in JavaScript, Node.js, and ReactJS, I believe in the power of
            teamwork to create remarkable products. My passion lies not only in writing efficient
            code but also in collaborating with diverse teams to build innovative solutions.
          </span>
          <button className="btn my-2 md:hidden flex gap-3 border dark:border-white border-black text-black dark:text-white rounded py-2 px-2 justify-center items-center hover:bg-primio hover:border-primio">
            <Link href="/about">
              <span>See More</span>
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
