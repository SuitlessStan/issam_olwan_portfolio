"use client"

import Image from "next/image"
import ProfilePicture from "../../public/images/profile-picture.jpg"
import { faDocker, faLinux, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faServer, faCode } from "@fortawesome/free-solid-svg-icons"
import Card from "@/components/card"
import { usePathname } from "next/navigation"

export default function AboutMe() {
  const skills = [
    {
      icon: faDocker,
      title: "Docker",
      description:
        "I am proficient in Docker, skilled in packaging applications into portable containers, defining Dockerfiles, optimizing resource usage, and integrating Docker into CI/CD pipelines. I can efficiently deploy and manage applications, improving system performance and reliability.",
    },
    {
      icon: faLinux,
      title: "Linux",
      description:
        "I am an experienced Linux professional with expertise in system administration, including command-line usage, system security, shell scripting, and automation. I handle installation, configuration, and maintenance, ensuring robust system security. My skills optimize workflows, automate tasks, and effectively manage Linux-based systems.",
    },
    {
      icon: faNodeJs,
      title: "NodeJs",
      description:
        "I am a Node.js backend engineer with expertise in optimizing API performance, designing applications, and implementing efficient data storage using MongoDB and MySQL. I have developed a dockerized car parking system and an S3 bucket POST API for efficient image storage. My skills enable me to build high-performing applications and optimize API functionality.",
    },
    {
      icon: faReact,
      title: "ReactJs",
      description:
        "As an experienced React.js developer, I've contributed to open-source platforms like AnyoneCanCode and freeCodeCamp. My expertise lies in building interactive user interfaces and leveraging the latest React.js features. I have demonstrated collaboration with diverse communities and a talent for creating dynamic web applications.",
    },
    {
      icon: faServer,
      title: "Nginx",
      description:
        "I am skilled in configuring and leveraging Nginx as a reverse proxy server, ensuring efficient and scalable handling of requests and providing optimal delivery of web content.",
    },
    {
      icon: faCode,
      title: "Typescript",
      description:
        "As a full-stack developer with extensive TypeScript experience, I build robust and scalable web applications with enhanced code maintainability and developer productivity. I create interactive user interfaces with React.js on the frontend and efficient APIs with data models on the backend, ensuring seamless application development throughout the entire stack.",
    },
  ]

  const pathName = usePathname()
  return (
    <>
      {/* About me */}
      <div className="container flex flex-col md:flex-row gap-5 mx-auto p-5 mt-20" id="about-me">
        <div
          className={`profile-image flex justify-center items-center px-5 md:hidden ${
            pathName == "/about" ? " " : "md:hidden"
          }`}>
          <Image
            className="rounded w-full h-full md:h-1/2"
            alt="profile_picture"
            src={ProfilePicture}
            placeholder="blur"
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
        </div>
      </div>
      {/* Skills */}
      <div className="my-4 container mx-auto px-4">
        <span className="block text-3xl text-center my-5">My Skills</span>
        <div className="grid grid-cols-12 gap-3">
          {skills.map((skill) => {
            return (
              <div className="col-span-12 md:col-span-4" key={skill.title + skill.description}>
                <Card icon={skill.icon} title={skill.title} description={skill.description} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
