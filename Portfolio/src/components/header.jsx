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
            <p> <span className="sg left">[</span>user@Browser-{browser} ~ % portfolio</p>
            <div className="border">
                <div>
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" viewBox="0 0 200 38.04"
                        enable-background="new 0 0 200 38.04" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M13.47,11.24l1.42,2.25l-9.43,5.73l9.43,5.73l-1.52,2.23L2.8,20.55v-2.66L13.47,11.24z" />
                                <path d="M24.86,25.9c0.97,0,1.73-0.17,2.3-0.52c0.57-0.35,0.85-0.83,0.85-1.44c0-0.4-0.08-0.74-0.25-1.02s-0.5-0.54-0.99-0.78
			c-0.5-0.24-1.25-0.48-2.26-0.74c-0.96-0.25-1.79-0.55-2.52-0.89c-0.72-0.34-1.28-0.79-1.68-1.33c-0.4-0.54-0.59-1.25-0.59-2.11
			c0-0.84,0.23-1.58,0.7-2.21c0.47-0.63,1.14-1.12,2.02-1.47c0.88-0.35,1.91-0.53,3.1-0.53c1.22,0,2.29,0.16,3.2,0.49
			s1.69,0.73,2.33,1.21l-1.3,1.96c-0.57-0.38-1.19-0.69-1.87-0.93c-0.68-0.24-1.44-0.36-2.28-0.36c-0.98,0-1.69,0.15-2.12,0.44
			c-0.43,0.3-0.64,0.69-0.64,1.18c0,0.36,0.11,0.66,0.32,0.91c0.22,0.25,0.59,0.47,1.12,0.68s1.29,0.45,2.26,0.73
			c0.95,0.26,1.77,0.56,2.47,0.92s1.25,0.82,1.64,1.39s0.59,1.33,0.59,2.25c0,1.05-0.3,1.92-0.9,2.59c-0.6,0.67-1.39,1.17-2.37,1.48
			c-0.98,0.32-2.03,0.48-3.15,0.48c-1.35,0-2.52-0.2-3.5-0.59c-0.98-0.39-1.81-0.89-2.48-1.48l1.64-1.89
			c0.57,0.46,1.22,0.84,1.96,1.13C23.21,25.76,24.01,25.9,24.86,25.9z" />
                                <path d="M41.94,12.88c1.42,0,2.62,0.32,3.6,0.96c0.97,0.64,1.71,1.53,2.21,2.68c0.5,1.15,0.75,2.5,0.75,4.05
			c0,1.54-0.25,2.9-0.77,4.06c-0.51,1.16-1.25,2.06-2.23,2.71c-0.98,0.64-2.17,0.96-3.58,0.96c-1.41,0-2.6-0.31-3.58-0.94
			c-0.98-0.62-1.72-1.51-2.23-2.67s-0.77-2.52-0.77-4.09c0-1.53,0.25-2.87,0.77-4.02c0.51-1.16,1.26-2.06,2.24-2.71
			S40.54,12.88,41.94,12.88z M41.94,15.29c-1.11,0-1.95,0.43-2.51,1.28c-0.56,0.86-0.84,2.19-0.84,4.02c0,1.81,0.28,3.15,0.83,4.01
			c0.56,0.86,1.39,1.29,2.5,1.29c1.11,0,1.95-0.43,2.5-1.29s0.83-2.21,0.83-4.04c0-1.8-0.28-3.13-0.83-3.99
			C43.89,15.72,43.06,15.29,41.94,15.29z" />
                                <path d="M55.74,13.27V23.5c0,0.87,0.17,1.49,0.52,1.86s0.87,0.55,1.56,0.55c0.66,0,1.3-0.2,1.92-0.6c0.62-0.4,1.1-0.88,1.46-1.46
			v-10.6h3.09v14.65h-2.66l-0.19-1.87c-0.54,0.73-1.23,1.29-2.05,1.67s-1.67,0.58-2.54,0.58c-1.41,0-2.46-0.39-3.15-1.17
			c-0.69-0.78-1.04-1.86-1.04-3.23V13.27H55.74z" />
                                <path d="M69.34,27.92V25.7h2.14V15.47h-2.14v-2.21h4.49l0.57,3.4c0.54-1.23,1.22-2.17,2.02-2.81c0.8-0.64,1.84-0.96,3.11-0.96
			c0.43,0,0.82,0.03,1.16,0.1c0.34,0.07,0.69,0.16,1.03,0.27l-0.92,2.66c-0.29-0.08-0.57-0.15-0.83-0.19s-0.54-0.06-0.85-0.06
			c-1.06,0-1.97,0.4-2.74,1.19c-0.77,0.8-1.37,1.92-1.81,3.38v5.44h2.94v2.22H69.34z M78.99,18.66v-3.61l0.39-1.79h2.34l-0.52,5.4
			H78.99z" />
                                <path
                                    d="M92.76,25.74c0.68,0,1.31-0.12,1.9-0.35c0.59-0.24,1.15-0.54,1.68-0.92l1.43,2c-0.63,0.55-1.4,0.99-2.31,1.33
			s-1.84,0.51-2.81,0.51c-1.49,0-2.76-0.32-3.82-0.95c-1.06-0.63-1.87-1.52-2.43-2.67c-0.56-1.15-0.84-2.48-0.84-4.01
			c0-1.49,0.28-2.82,0.85-3.99c0.56-1.17,1.38-2.09,2.45-2.77c1.07-0.68,2.35-1.02,3.85-1.02c0.99,0,1.91,0.15,2.74,0.44
			c0.84,0.3,1.6,0.74,2.3,1.32l-1.42,1.96c-0.57-0.4-1.15-0.7-1.74-0.91c-0.59-0.21-1.2-0.31-1.83-0.31c-1.15,0-2.09,0.43-2.82,1.28
			c-0.73,0.85-1.1,2.19-1.1,4.01c0,1.22,0.17,2.2,0.5,2.95c0.34,0.75,0.8,1.29,1.39,1.62C91.34,25.57,92.01,25.74,92.76,25.74z" />
                                <path d="M104.85,21.59c0.06,1,0.28,1.82,0.63,2.45c0.36,0.63,0.83,1.1,1.41,1.39s1.22,0.44,1.92,0.44c0.72,0,1.38-0.11,1.98-0.33
			c0.61-0.22,1.22-0.54,1.83-0.94l1.34,1.86c-0.68,0.56-1.48,1-2.38,1.33c-0.91,0.33-1.88,0.5-2.92,0.5c-1.51,0-2.78-0.32-3.83-0.97
			s-1.84-1.55-2.38-2.71c-0.54-1.16-0.81-2.49-0.81-4.01c0-1.47,0.27-2.79,0.8-3.95s1.3-2.08,2.29-2.76
			c0.99-0.68,2.18-1.02,3.56-1.02c1.3,0,2.41,0.3,3.34,0.89c0.93,0.59,1.65,1.43,2.16,2.52c0.51,1.09,0.77,2.39,0.77,3.92
			c0,0.25-0.01,0.5-0.02,0.74c-0.01,0.24-0.03,0.46-0.05,0.64H104.85z M108.33,15.18c-0.97,0-1.76,0.35-2.39,1.04
			c-0.63,0.69-1,1.78-1.1,3.25h6.74c-0.03-1.38-0.32-2.44-0.88-3.18C110.15,15.55,109.36,15.18,108.33,15.18z" />
                                <path d="M126.25,8.38c1.29,0,2.37,0.17,3.26,0.51c0.89,0.34,1.71,0.82,2.47,1.45l-1.67,2c-0.57-0.48-1.18-0.84-1.83-1.07
			c-0.65-0.23-1.35-0.35-2.08-0.35c-0.95,0-1.82,0.24-2.62,0.72s-1.44,1.26-1.92,2.34s-0.72,2.52-0.72,4.33
			c0,1.77,0.23,3.19,0.69,4.27c0.46,1.08,1.09,1.87,1.89,2.36s1.7,0.74,2.69,0.74c1.02,0,1.87-0.17,2.54-0.51
			c0.67-0.34,1.26-0.72,1.78-1.14l1.54,1.98c-0.63,0.62-1.44,1.15-2.41,1.6c-0.97,0.45-2.16,0.67-3.56,0.67
			c-1.61,0-3.05-0.38-4.34-1.14c-1.28-0.76-2.29-1.88-3.03-3.37c-0.74-1.48-1.11-3.3-1.11-5.47c0-2.15,0.38-3.96,1.14-5.43
			c0.76-1.48,1.78-2.59,3.06-3.36C123.29,8.76,124.71,8.38,126.25,8.38z" />
                                <path d="M141.21,12.88c1.42,0,2.62,0.32,3.6,0.96c0.97,0.64,1.71,1.53,2.21,2.68c0.5,1.15,0.75,2.5,0.75,4.05
			c0,1.54-0.25,2.9-0.77,4.06c-0.51,1.16-1.25,2.06-2.23,2.71c-0.98,0.64-2.17,0.96-3.58,0.96s-2.6-0.31-3.58-0.94
			c-0.98-0.62-1.72-1.51-2.23-2.67s-0.77-2.52-0.77-4.09c0-1.53,0.26-2.87,0.77-4.02c0.51-1.16,1.26-2.06,2.24-2.71
			S139.8,12.88,141.21,12.88z M141.21,15.29c-1.11,0-1.95,0.43-2.51,1.28s-0.84,2.19-0.84,4.02c0,1.81,0.28,3.15,0.83,4.01
			c0.56,0.86,1.39,1.29,2.5,1.29c1.11,0,1.95-0.43,2.5-1.29s0.83-2.21,0.83-4.04c0-1.8-0.28-3.13-0.83-3.99
			S142.32,15.29,141.21,15.29z" />
                                <path d="M160.47,7.04l3.09,0.35v20.53h-2.72l-0.22-1.8c-0.5,0.69-1.09,1.23-1.78,1.61s-1.46,0.57-2.32,0.57
			c-1.25,0-2.28-0.32-3.09-0.96s-1.41-1.54-1.8-2.71c-0.39-1.16-0.59-2.5-0.59-4.03c0-1.49,0.23-2.81,0.69-3.98
			c0.46-1.16,1.12-2.07,1.97-2.74c0.86-0.67,1.88-1,3.09-1c0.76,0,1.45,0.14,2.05,0.41c0.61,0.27,1.14,0.67,1.61,1.19V7.04z
			 M157.62,15.26c-1.04,0-1.85,0.43-2.43,1.3c-0.58,0.87-0.87,2.21-0.87,4.03c0,1.25,0.12,2.26,0.36,3.04
			c0.24,0.78,0.58,1.35,1.03,1.72s0.99,0.55,1.63,0.55c0.7,0,1.31-0.2,1.82-0.61s0.95-0.9,1.31-1.47v-6.94
			c-0.36-0.52-0.78-0.92-1.25-1.2C158.74,15.41,158.2,15.26,157.62,15.26z" />
                                <path d="M171.03,21.59c0.06,1,0.28,1.82,0.63,2.45c0.36,0.63,0.83,1.1,1.41,1.39c0.58,0.3,1.22,0.44,1.92,0.44
			c0.72,0,1.38-0.11,1.99-0.33s1.22-0.54,1.83-0.94l1.34,1.86c-0.68,0.56-1.48,1-2.38,1.33c-0.91,0.33-1.88,0.5-2.92,0.5
			c-1.51,0-2.78-0.32-3.83-0.97s-1.84-1.55-2.38-2.71c-0.54-1.16-0.81-2.49-0.81-4.01c0-1.47,0.27-2.79,0.8-3.95s1.3-2.08,2.29-2.76
			c0.99-0.68,2.18-1.02,3.56-1.02c1.3,0,2.41,0.3,3.34,0.89c0.93,0.59,1.65,1.43,2.16,2.52c0.51,1.09,0.77,2.39,0.77,3.92
			c0,0.25-0.01,0.5-0.02,0.74c-0.01,0.24-0.03,0.46-0.05,0.64H171.03z M174.5,15.18c-0.97,0-1.76,0.35-2.39,1.04
			c-0.63,0.69-1,1.78-1.1,3.25h6.74c-0.03-1.38-0.32-2.44-0.88-3.18C176.33,15.55,175.53,15.18,174.5,15.18z" />
                                <path
                                    d="M186.22,11.24l10.66,6.63v2.68l-10.57,6.63l-1.52-2.19l9.44-5.77l-9.44-5.69L186.22,11.24z" />
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