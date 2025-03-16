import React, {useEffect, useRef } from "react";
import '../css/about.scss';
import profileImage from "../assets/boy.png";

function About() {

    const asciiArtRef = useRef(null);
    const terminalEndRef = useRef(null);

    useEffect(() => {

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = profileImage;

        const CHAR_MAP = [" ", "#", "%", ".", "'", " ", "+", "."]; // Darkest to lightest

        img.onload = function () {
            canvas.width = 56; // Adjust for pixel resolution
            canvas.height = 30;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            let output = "";

            for (let y = 0; y < canvas.height; y++) {
                let line = "";
                for (let x = 0; x < canvas.width; x++) {
                    let index = (y * canvas.width + x) * 4;
                    let brightness = (imageData[index] + imageData[index + 1] + imageData[index + 2]) / 3;

                    // Map brightness to character set
                    let charIndex = Math.floor((brightness / 255) * (CHAR_MAP.length - 1));
                    let char = CHAR_MAP[charIndex];

                    line += char;
                }
                output += line + "\n";
            }

            if (asciiArtRef.current) {
                asciiArtRef.current.textContent = output;
            }

            setTimeout(() => {
                terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);

        };

    }, []);

    return (
        <section className="about" id="about-section">
            <p className="section-route pb"><span className="left sb">&#91;</span>&nbsp;~<span className="sb">/User/Projects/GitHub/</span>portfolio/src&nbsp; &nbsp;<span className="py"> Main &nbsp;</span></p><span className="route-rb">〉</span><span className="route-rt">⏵</span><span className="route-command">about</span>
            <div className="about-description">
                <div>
                    <pre ref={asciiArtRef} className="ascii-art"></pre>
                </div>

                <div>
                    <p>Hey, I'm Rathin, a Computer Science student at Hochschule Hof with a strong interest in software development, web technologies, and problem-solving. I thrive on building efficient, scalable, and user-friendly applications.</p>
                    <br/>
                    <p>I specialize in developing both frontend and backend solutions. Whether it's crafting dynamic web applications or designing intuitive user interfaces, I enjoy every aspect of the development process.</p>
                    <br />
                    <p>Beyond coding, I love exploring new technologies, landscapes and adventure activities. My portfolio showcases a range of projects, from full-stack web applications to software solutions, demonstrating my ability to tackle complex challenges. Feel free to explore my work and don't hesitate to reach out!</p>
                    <br />
                    <p>Programming Languages: Java, JavaScript, PHP</p>
                    <br />
                    <p>Frameworks: ReactJS, Laravel, Express.js, Sass, Bootstrap</p>
                </div>
            </div>
            {/* Invisible div to trigger scrolling after rendering */}
            <div ref={terminalEndRef}></div>
        </section>
    );

}

export default About;