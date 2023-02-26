import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import PortfolioLogo from '../portfolio-logo.png'
import { Link } from 'react-scroll'
import Resume from '../resume.pdf'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const sun = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
        </svg>
    );

    const moon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
        </svg>
    );


    return (
        <div id="home" className="isolate bg-white dark:bg-gray-800">
            <div className="px-6 pt-6 lg:px-8">
                <nav className="flex items-center justify-between" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Jeremy Hutchings</span>
                            <img className="h-12" src={PortfolioLogo} alt="" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button className="rounded-md bg-indigo-600 px-1 py-1 text-sm font-semibold text-white 
                        shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                        focus-visible:outline-indigo-600 cursor-pointer select-none mr-6"
                            type="button"
                            onClick={handleThemeSwitch}>
                            {theme === 'dark' ? sun : moon}
                        </button>
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-600"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link className="text-lg font-semibold leading-6 text-black dark:text-white cursor-pointer" to="projects" spy={true} smooth={true}>Projects</Link>
                        <Link className="text-lg font-semibold leading-6 text-black dark:text-white cursor-pointer" to="timeline" spy={true} smooth={true}>Timeline</Link>
                        <a href={Resume} download className="text-lg font-semibold leading-6 text-black dark:text-white cursor-pointer">Resume</a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button className="rounded-md bg-indigo-600 px-2.5 py-2.5 text-sm font-semibold text-white 
                        shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                        focus-visible:outline-indigo-600 cursor-pointer select-none mr-1"
                            type="button"
                            onClick={handleThemeSwitch}>
                            {theme === 'dark' ? sun : moon}
                        </button>
                        <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white 
                        shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                        focus-visible:outline-indigo-600 cursor-pointer select-none" to="contact" spy={true} smooth={true}>
                            Contact
                        </Link>
                    </div>
                </nav>
                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 lg:hidden">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Jeremy Hutchings</span>
                                <img className="h-12" src={PortfolioLogo} alt="" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-indigo-600"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6 flex flex-col">
                                    <Link className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold 
                                    leading-7 text-black dark:text-white hover:bg-gray-400/10 cursor-pointer select-none"
                                        to="projects" spy={true} smooth={true} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                                    <Link className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold 
                                    leading-7 text-black dark:text-white hover:bg-gray-400/10 cursor-pointer select-none"
                                        to="timeline" spy={true} smooth={true} onClick={() => setMobileMenuOpen(false)}>Timeline</Link>
                                    <a href={Resume} download className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold 
                                    leading-7 text-black dark:text-white hover:bg-gray-400/10 cursor-pointer select-none"
                                        onClick={() => setMobileMenuOpen(false)}>Resume</a>
                                    <Link className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold 
                                    leading-7 text-black dark:text-white hover:bg-gray-400/10 cursor-pointer select-none"
                                        to="contact" spy={true} smooth={true} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-6xl">
                                Hey, I'm Jeremy Hutchings
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                                Software Engineering Student
                            </p>
                            <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300">
                                Are you searching for a <strong>skilled software engineer</strong> to join your team? As a software engineering
                                major at <strong>Utah Tech University</strong>, I am eager to apply my skills and knowledge to help <strong>bring your
                                    project to life</strong>. Contact me to learn more about how I can contribute to your <strong>success</strong>.
                            </p>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white 
                                shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                                focus-visible:outline-indigo-600 cursor-pointer select-none" to="contact" spy={true} smooth={true}>Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
