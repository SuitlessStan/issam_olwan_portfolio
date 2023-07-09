import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <Image src="/images/convoluted.png" className="rounded border border-primio" alt="logo" width={40} height={0} />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" onClick={() => setOpen(!open)} className="inline-flex items-center justify-center text-sm h-8 w-8 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded={open ? "true" : "false"}>
                    <span className="sr-only">Open main menu</span>
                    {!open ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M13 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> : <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 6.12305L17 18.123L14.5 15.623L12 13.123M5 18.123L17 5.87695" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    }
                </button>
                <div className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col md:flex-row mt-5 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:p-0 rounded font-Ubuntu text-sm md:text-lg border-b-4 border-transparent hover:border-primio transition-colors" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:p-0 rounded font-Ubuntu text-sm md:text-lg border-b-4 border-transparent hover:border-primio transition-colors">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:p-0 rounded font-Ubuntu text-sm md:text-lg border-b-4 border-transparent hover:border-primio transition-colors">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:p-0 rounded font-Ubuntu text-sm md:text-lg border-b-4 border-transparent hover:border-primio transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-black" />
        </nav>
    )
}