import React from "react";
import Project from "./Project";

export default function Projects() {
    return (
        <div id="projects">
            <h2 id="timeline" className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 text-4xl font-bold text-center pb-8">Projects</h2>
            <Project projectName="Go Gas"
                projectDescription="Go Gas is a web application built using the MERN 
            stack and provides users with current gas prices. It has a user-friendly interface 
            that allows users to search for gas prices at nearby locations and add 
            prices to the database. With its sleek design and advanced functionality, Go Gas is a 
            convenient and reliable way to keep track of gas prices in real-time."
                projectImageLink="https://i.imgur.com/I6BpZsc.png"
                projectSourceLink="https://github.com/jhutchings99/go-gas"
                projectDemoLink="https://delightful-profiterole-d1df4c.netlify.app/" />
            <Project projectName="Fractal Image Generator"
                projectDescription="In my CS-3005 C++ class at Utah Tech University, 
                our semester long project was to build a fractal image 
                generator. It contains a Command Line Interface (CLI) version that allows 
                users to input parameters such as the fractal type and resolution, and a 
                Graphical User Interface (GUI) version with an interactive display for 
                generating and viewing fractal images."
                projectImageLink="https://i.imgur.com/XHaltUP.png"
                projectSourceLink="https://github.com/jhutchings99/fractal-image-generator" />
            <Project projectName="Chirp"
                projectDescription="At the 24 hour hackathon Code Camp  in St. George, Utah, my team of four 
                developed a social media web application with a focus on music sharing. 
                Our application allowed users to share their favorite songs with others. We utilized modern web 
                development technologies and frameworks, and successfully delivered a functional and 
                visually appealing product within the hackathon timeframe. This project showcased our 
                teamwork, creativity, and ability to build complex web applications under time constraints."
                projectImageLink="https://i.imgur.com/tKC17FS.png"
                projectSourceLink="https://github.com/jhutchings99/Chirp" />
        </div>
    )
}