import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <span className="self-center text-2xl font-semibold font-Ubuntu whitespace-nowrap dark:text-white">Issam Olwan</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" onClick={() => setOpen(!open)} className="inline-flex items-center justify-center text-sm h-8 w-8 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {!open ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M13 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> : <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 6.12305L17 18.123L14.5 15.623L12 13.123M5 18.123L17 5.87695" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    }
                </button>
                <div className={`${!open ? "hidden" : " "} w-full md:block md:w-auto mb-2`} id="navbar-default">
                    <ul className="font-medium flex flex-col md:flex-row mt-5">
                        <li>
                            <a href="#" className="block font-Ubuntu text-sm md:text-lg my-2 md:mx-2 md:my-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block font-Ubuntu text-sm md:text-lg my-2 md:mx-2 md:my-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="block font-Ubuntu text-sm md:text-lg my-2 md:mx-2 md:my-0">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block font-Ubuntu text-sm md:text-lg my-2 md:mx-2 md:my-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}