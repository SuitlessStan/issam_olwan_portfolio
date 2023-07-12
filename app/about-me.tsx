import Image from "next/image"

export default function AboutMe() {
  return (
    <>
      <div className="container flex flex-col md:flex-row gap-5 mx-auto p-5">
        <div className="profile-image flex justify-center items-center px-5 md:hidden">
          <Image
            className="rounded w-full h-full"
            alt="profile_picture"
            src="/images/profile-picture.jpg"
            width={300}
            height={300}
          />
        </div>
        <div className="about-me">
          <span className="font-bold text-2xl my-2">About me</span>
          <br />
          <br />
          <span className="my-2">
            Welcome! I&apos;m <span className="rainbow-animation">ISSAM</span>. A Full Stack
            Software Engineer who thrives on collaborative work and delivering outstanding digital
            solutions. With expertise in JavaScript, Node.js, and ReactJS, I believe in the power of
            teamwork to create remarkable products. My passion lies not only in writing efficient
            code but also in collaborating with diverse teams to build innovative solutions.
          </span>
          <br />
          <br />
          <span className="my-2">
            I excel at optimizing APIs, executing seamless database migrations, and constructing
            scalable systems that perform at their best. However, what truly drives me is the
            opportunity to work closely with others, leveraging their unique skills and perspectives
            to achieve common goals. By actively listening and engaging in open communication, I
            foster an environment that promotes creativity, collaboration, and trust.
          </span>
          <br />
          <br />
          <span className="my-2">
            As a frontend developer, I combine my proficiency in ES6, Bootstrap, and jQuery to
            create visually captivating and user-friendly interfaces. By collaborating closely with
            UI/UX designers, I ensure that the end product not only meets functional requirements
            but also delivers an exceptional user experience.
          </span>
          <br />
          <br />
          <span className="my-2">
            My dedication to open-source projects is a testament to my belief in the power of
            collective knowledge. By actively contributing to a coding platform, I collaborate with
            a broader community, helping individuals learn coding using TypeScript, ChakraUI,
            NextJS, and Strapi. This experience has further solidified my belief in the importance
            of collaboration and the transformative impact it can have on the final product.
            <br />
            If you&apos;re seeking a software engineer who values collaboration, creativity, and the
            pursuit of excellence, I&apos;m here to join forces and help bring your vision to life.
            Together, we can create something extraordinary.
          </span>
          <button className="btn my-2 md:hidden flex gap-3 border dark:border-white border-black text-black dark:text-white rounded py-2 px-2 justify-center items-center hover:bg-primio hover:border-primio">
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
          </button>
        </div>
      </div>
    </>
  )
}
