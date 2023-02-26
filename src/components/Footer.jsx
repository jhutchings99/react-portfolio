import { Link } from 'react-scroll'
import Resume from '../resume.pdf'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <div>
            <footer className="p-4 bg-white border-t md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-black sm:text-center dark:text-white">© {currentYear} <a href="https://flowbite.com/">Jeremy Hutchings</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-black dark:text-white sm:mt-0">
                    <Link className="cursor-pointer select-none mr-4 hover:underline md:mr-6" to="home" spy={true} smooth={true}>Home</Link>
                    <Link className="cursor-pointer select-none mr-4 hover:underline md:mr-6" to="projects" spy={true} smooth={true}>Projects</Link>
                    <Link className="cursor-pointer select-none mr-4 hover:underline md:mr-6" to="timeline" spy={true} smooth={true}>Timeline</Link>
                    <a href={Resume} download className="cursor-pointer select-none mr-4 hover:underline md:mr-6">Resume</a>
                    <Link className="cursor-pointer select-none hover:underline" to="contact" spy={true} smooth={true}>Contact</Link>
                </ul>
            </footer>
        </div>
    )
}