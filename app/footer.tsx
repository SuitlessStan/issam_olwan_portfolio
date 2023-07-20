import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook, faMedium, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <hr />
      <div className="text-center flex flex-col md:flex-row gap-10 justify-center items-center p-5">
        <div className="socials">
          <ul className="flex gap-5 mt-2">
            <li>
              <Link href="https://www.facebook.com/esam.olwan/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="xl" className="hover:text-primio" />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/esamolwan" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="xl" className="hover:text-primio" />
              </Link>
            </li>
            <li>
              <Link href="https://medium.com/@esamolwan" target="_blank">
                <FontAwesomeIcon icon={faMedium} size="xl" className="hover:text-primio" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/essam-olwan-44a783251/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="xl" className="hover:text-primio" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="block text-sm text-center">&copy; 2023 Issam Productions</span>
    </>
  )
}
