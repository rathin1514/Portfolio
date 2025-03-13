import React from "react";
import '../css/header.scss'

function Header() {

    let now = new Date();
    const day = now.toDateString();
    const time = now.toLocaleTimeString();
    function getBrowserName() {
        const userAgent = navigator.userAgent;

        if (userAgent.includes("Chrome") && userAgent.includes("Edg/")) return "Microsoft Edge";
        if (userAgent.includes("Chrome") && !userAgent.includes("Edg/")) return "Google Chrome";
        if (userAgent.includes("Firefox")) return "Mozilla Firefox";
        if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Safari";
        if (userAgent.includes("OPR") || userAgent.includes("Opera")) return "Opera";
        if (userAgent.includes("MSIE") || userAgent.includes("Trident")) return "Internet Explorer"; // Legacy

        return "Unknown Browser";
    }

    const browser = getBrowserName();

    return (
        <header id="header-section">
            <p>Last login: {day} {time} on ttys000</p>
            <p> <span className="sg left">&#91;</span>user@Browser-{browser} ~ % portfolio</p>
            <div className="border">
                <div>

                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="450px"
                        viewBox="0 0 152.6 35" enableBackground="new 0 0 152.6 35" xmlSpace="preserve">
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <path d="M15.7,12l1.4,2.2l-9.2,5.6l9.2,5.6l-1.5,2.2L5.3,21v-2.6L15.7,12z" />
                                        <path d="M21.9,28.2V26H24v-9.9h-2.1V14h4.4l0.6,3.3c0.5-1.2,1.2-2.1,2-2.7s1.8-0.9,3-0.9c0.4,0,0.8,0,1.1,0.1
					c0.3,0.1,0.7,0.2,1,0.3l-0.9,2.6c-0.3-0.1-0.6-0.1-0.8-0.2s-0.5-0.1-0.8-0.1c-1,0-1.9,0.4-2.7,1.2c-0.8,0.8-1.3,1.9-1.8,3.3V26
					h2.9v2.2H21.9z M31.4,19.2v-3.5l0.4-1.7H34l-0.5,5.3H31.4z"/>
                                        <path d="M49,24.7c0,0.6,0.1,1,0.3,1.2c0.2,0.3,0.4,0.4,0.8,0.6l-0.7,2.1c-0.7-0.1-1.3-0.3-1.8-0.6s-0.9-0.8-1.1-1.4
					c-0.5,0.7-1.2,1.2-2,1.5c-0.8,0.3-1.7,0.5-2.6,0.5c-1.4,0-2.6-0.4-3.4-1.2s-1.3-1.9-1.3-3.2c0-1.5,0.6-2.7,1.8-3.5
					c1.2-0.8,2.8-1.2,5-1.2h2v-0.9c0-0.9-0.3-1.6-0.8-2c-0.6-0.4-1.3-0.6-2.3-0.6c-0.5,0-1,0.1-1.7,0.2s-1.4,0.3-2.1,0.6l-0.7-2.1
					c0.9-0.3,1.8-0.6,2.6-0.7c0.9-0.2,1.6-0.2,2.4-0.2c1.9,0,3.3,0.4,4.3,1.3c0.9,0.8,1.4,2,1.4,3.5V24.7z M42.8,26.3
					c0.6,0,1.2-0.2,1.8-0.5c0.6-0.3,1.1-0.8,1.4-1.4v-3.1h-1.7c-1.4,0-2.4,0.2-3.1,0.7s-0.9,1.1-0.9,2c0,0.8,0.2,1.3,0.6,1.7
					C41.4,26.1,42,26.3,42.8,26.3z"/>
                                        <path d="M66.3,27.5c-0.5,0.3-1.1,0.6-1.9,0.8c-0.7,0.2-1.5,0.3-2.3,0.3c-1.7,0-2.9-0.4-3.8-1.3s-1.3-2-1.3-3.4v-7.7h-3.2V14h3.2
					v-3.2l3-0.4V14h4.8l-0.3,2.2h-4.5v7.7c0,0.8,0.2,1.3,0.6,1.7c0.4,0.4,1,0.6,1.9,0.6c0.5,0,1-0.1,1.4-0.2
					c0.4-0.1,0.8-0.3,1.2-0.5L66.3,27.5z"/>
                                        <path d="M73.7,7.9v7.8c0.6-0.7,1.3-1.2,2-1.6c0.8-0.4,1.6-0.5,2.4-0.5c1.3,0,2.3,0.4,3,1.1c0.7,0.7,1,1.8,1,3.1v10.4h-3v-9.9
					c0-0.9-0.2-1.5-0.5-1.8c-0.3-0.4-0.8-0.6-1.6-0.6c-0.5,0-0.9,0.1-1.3,0.3c-0.4,0.2-0.8,0.5-1.1,0.8c-0.3,0.3-0.6,0.7-0.9,1v10.2
					h-3v-20L73.7,7.9z"/>
                                        <path d="M94.8,14v12h3.9v2.2H87.5V26h4.3v-9.8h-4.1V14H94.8z M92.7,7c0.6,0,1.1,0.2,1.4,0.5s0.5,0.8,0.5,1.3s-0.2,1-0.5,1.4
					s-0.8,0.6-1.4,0.6c-0.6,0-1-0.2-1.4-0.6s-0.6-0.8-0.6-1.4s0.2-1,0.6-1.3S92.1,7,92.7,7z"/>
                                        <path d="M103.3,28.2V14h2.6l0.2,1.8c0.6-0.7,1.3-1.3,2.1-1.7c0.8-0.4,1.6-0.6,2.5-0.6c1.3,0,2.3,0.4,3,1.1c0.7,0.7,1,1.8,1,3.1
					v10.4h-3v-8.9c0-0.8,0-1.5-0.1-2c-0.1-0.5-0.3-0.9-0.6-1.1c-0.3-0.2-0.7-0.3-1.3-0.3c-0.5,0-0.9,0.1-1.3,0.3
					c-0.4,0.2-0.8,0.5-1.1,0.8c-0.3,0.3-0.6,0.7-0.9,1v10.2H103.3z"/>
                                        <path d="M132,15c0,0.9-0.2,1.7-0.6,2.4c-0.4,0.7-0.9,1.2-1.5,1.7s-1.4,0.8-2.2,1l5.3,8.1h-3.6l-4.7-7.7h-2v7.7h-3.1V9.6h5.2
					c2.4,0,4.2,0.4,5.4,1.3C131.4,11.8,132,13.2,132,15z M128.7,15c0-1.1-0.3-1.9-0.9-2.3c-0.6-0.5-1.6-0.7-2.9-0.7h-2.2v6.3h2.3
					c1.2,0,2.1-0.3,2.8-0.8C128.4,17,128.7,16.1,128.7,15z"/>
                                        <path d="M137.1,12l10.4,6.5V21l-10.4,6.5l-1.5-2.1l9.2-5.6l-9.2-5.5L137.1,12z" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>

                </div>
            </div>
            <p className="sub-header sy">Available commands:</p>
            <div className="command-container">
                <div className="command-columns">
                    <div className="commands">
                        <p>home</p>
                    </div>
                    <div className="description">
                        <p>Takes you back to the home page and clears the console</p>
                    </div>
                    <div className="commands">
                        <p>contact</p>
                    </div>
                    <div className="description">
                        <p>Shows contact information and links to social media profiles</p>
                    </div>
                    <div className="commands">
                        <p>about</p>
                    </div>
                    <div className="description">
                        <p>Brief information about me</p>
                    </div>
                    <div className="commands">
                        <p>projects</p>
                    </div>
                    <div className="description">
                        <p>Lists all the projects I made with deployment/GitHub links and technology stack used for respective project</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;