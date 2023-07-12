import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faMedium,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <>
      <hr />
      <div className="text-center flex flex-col md:flex-row gap-10 justify-center items-center p-5">
        <div className="introduction">
          <span className="block text-2xl dark:text-white text-black">Homepage</span>
          <ul className="mt-2">
            <li>
              <a href="#" target="_blank">
                Home
              </a>
            </li>
            <li>
              <a href="/about" target="_blank">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-me">
          <span className="block text-2xl dark:text-white text-black">Contact me</span>
          <ul className="mt-2">
            <li>
              <a href="/contact" target="_blank">
                Contact page
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <span className="block text-2xl relative bottom-3 dark:text-white text-black">
            Socials
          </span>
          <ul className="flex flex-col md:flex-row gap-5 mt-2">
            <li>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faMedium} size="lg" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-1/2 mx-auto my-3" />
      <span className="block text-sm text-center">&copy; 2023 Technos Sophistes</span>
    </>
  )
}
