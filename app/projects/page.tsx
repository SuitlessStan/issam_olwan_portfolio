"use client"

import Image from "next/image"
import VirtualLibrary from "/public/images/virtual-library-1.png"
import VirtualLibrary1 from "/public/images/virtual-library-2.png"
import VirtualLibrary2 from "/public/images/virtual-library-3.png"
import VirtualLibrary3 from "/public/images/virtual-library-4.png"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Link from "next/link"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const items = [
  {
    uuid: 1,
    heading: "Backend Development",
    content:
      "Built a robust backend application, emphasizing efficiency in data retrieval and storage.",
  },
  {
    uuid: 2,
    heading: "Frontend Development",
    content: ` Utilized React with TypeScript and Tailwind CSS to create a responsive and user-friendly interface. \n
     Integrated Firebase services (authentication, Firestore, and storage) to manage user data,
          including personal information and profile pictures.
      `,
  },
]

export default function Projects() {
  return (
    <div className="mt-20 m-1 container flex flex-col gap-3">
      <p>Personal project</p>
      <Link href="https://library-frontend-lime.vercel.app/">
        <span className="text-3xl underline underline-offset-4">Virtual Library</span>
      </Link>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={2500}
        autoPlay
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="w-full mx-auto items-center relative lg:left-20 md:left-5">
        <Image className="w-full h-full" src={VirtualLibrary} alt="virtual library" />
        <Image className="w-full h-full" src={VirtualLibrary1} alt="virtual library" />
        <Image className="w-full h-full" src={VirtualLibrary2} alt="virtual library" />
        <Image className="w-full h-full" src={VirtualLibrary3} alt="virtual library" />
      </Carousel>

      <div className="mt-4">
        <ul className="text-md flex flex-col gap-2 list-disc">
          <li>
            Developed a backend application to fetch book cover URLs using titles and integrated
            with a MySQL database for storage.
          </li>
          <li>
            Implemented a Redis cache system to optimize response times, especially for frequently
            accessed book titles.
          </li>
          <li>
            Utilized a Firebase service account for seamless integration with the backend
            application, enhancing security and data management.
          </li>
        </ul>
      </div>
      <Accordion allowMultipleExpanded allowZeroExpanded className="w-full">
        {items.map((item) => (
          <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.heading}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
