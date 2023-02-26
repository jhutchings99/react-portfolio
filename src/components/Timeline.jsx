import React from "react";

export default function Timeline() {
    return (
        <div className="flex justify-center bg-white dark:bg-gray-800 px-8 pb-32">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-4 w-[60vw]">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2016</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Wrote First Line of Code</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">In high school, I wrote my first line of code while taking a computer science class, and I was immediately fascinated by the endless possibilities of programming.</p>
                </li>
                <li className="mb-10 ml-4 w-[60vw]">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2020</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Started University</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Started my studies at Utah Tech University, majoring in software engineering, marked the beginning of my passion for exploring the intricate world of programming and honing my technical abilities.</p>
                </li>
                <li className="mb-10 ml-4 w-[60vw]">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Attended Code School</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">I also attended Code School, a highly competitive summer program at Utah Tech University where I learned about and created web applications</p>
                </li>
                <li className="mb-10 ml-4 w-[60vw]">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Presented Final Project to Local Companies</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">At the end of Code School, my group presented our final project, Go Gas, to several local companies. Go Gas was a web application that provided up-to-date gas prices by utilizing user-generated data, and it was a rewarding experience to see our hard work pay off and receive positive feedback from industry professionals.</p>
                </li>
                <li className="mb-10 ml-4 w-[60vw]">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Became a Lab Assitant</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">I began working as a lab assistant at Utah Tech University. It has been a fulfilling experience to give back to the community and share my knowledge and passion for programming with others.</p>
                </li>
                <li className="ml-4 w-[60vw]">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-600 dark:bg-gray-300"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Remade First Large Project</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Taking my skills to the next level, I decided to remake Go Gas independently using the MERN stack (MongoDB, Express, React, and Node.js). Through this experience, I gained proficiency in building full-stack applications and enhanced my understanding of modern web development frameworks.</p>
                </li>
            </ol>
        </div>
    )
}