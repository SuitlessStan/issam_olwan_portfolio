"use client"

import Image from "next/image"
import ProfilePicture from "../../public/images/profile-picture.jpg"
import { faDocker, faLinux, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faServer, faCode } from "@fortawesome/free-solid-svg-icons"
import Card from "@/components/card"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function AboutMe() {
  const skills = [
    {
      icon: faDocker,
      title: "Docker",
      description:
        "I possess strong skills in Dockerizing applications, which involves packaging applications and their dependencies into lightweight, portable containers. My expertise includes proficiency in Docker, the ability to package applications and define Dockerfiles, creating consistent and isolated environments, ensuring portability and scalability, optimizing resource utilization, integrating Docker into CI/CD pipelines, and troubleshooting and debugging container-related issues. With these skills, I can efficiently deploy and manage applications, streamline the development process, and improve overall system performance and reliability.",
    },
    {
      icon: faLinux,
      title: "Linux",
      description:
        "I am an experienced Linux professional with a strong expertise in various aspects of Linux system administration. My skills include thorough knowledge of Linux operating systems, proficient command-line usage, system security implementation, and efficient shell scripting and automation. I am adept at handling system installation, configuration, and maintenance, ensuring system security through user management and robust authentication mechanisms. With my expertise in Linux, I can optimize workflows, automate tasks, and effectively manage and secure Linux-based systems.",
    },
    {
      icon: faNodeJs,
      title: "NodeJs",
      description:
        "As a Node.js backend engineer, I bring extensive experience in optimizing API performance, designing and developing applications, and implementing efficient data storage solutions. I have collaborated with development teams to enhance API performance by migrating data from MySQL to MongoDB, resulting in significant speed improvements. I have designed and developed a dockerized car parking system using Node.js, Knex.js, and MySQL, ensuring seamless integration of models and databases and conducting rigorous testing. I have also built an S3 bucket POST API, enabling clients to store images efficiently. My expertise in Node.js backend engineering enables me to develop high-performing applications, optimize API functionality, and create efficient data storage solutions.",
    },
    {
      icon: faReact,
      title: "ReactJs",
      description:
        "With my experience in React.js, I have made valuable contributions to open source platforms like AnyoneCanCode and freeCodeCamp. As a React.js developer, I have gained expertise in building interactive user interfaces, implementing component-based architectures, and leveraging the latest React.js features. Through my contributions to open source projects, I have demonstrated my ability to collaborate with a diverse community and make impactful contributions to the React.js ecosystem. My experience in React.js positions me as a skilled developer capable of creating dynamic and user-friendly web applications.",
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
        "I have extensive experience in building web applications using TypeScript for both the frontend and backend. With my expertise, I have successfully developed robust and scalable applications, leveraging the benefits of static typing, enhanced code maintainability, and improved developer productivity. As a full-stack developer, I am proficient in using TypeScript to build interactive user interfaces on the frontend, implementing component-based architectures, and leveraging frameworks such as React.js. On the backend, I have applied TypeScript to develop APIs, implement data models, and interact with databases efficiently. My experience in building web applications with TypeScript encompasses the entire development stack, enabling me to create seamless and cohesive applications with enhanced reliability and maintainability.",
    },
  ]

  const pathName = usePathname()
  return (
    <>
      {/* About me */}
      <div className="container flex flex-col md:flex-row gap-5 mx-auto p-5" id="about-me">
        <div
          className={`profile-image flex justify-center items-center px-5 ${
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
