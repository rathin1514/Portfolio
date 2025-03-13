import React, { useState, useEffect, useRef } from "react";
import About from "./about";
import Contact from "./contact";
import Project from "./project";

function Command() {

    const [commands, setCommands] = useState([]);
    const [input, setInput] = useState("");
    const terminalEndRef = useRef(null); 

    const commandComponents = {
        about: About,
        contact: Contact,
        projects: Project,
    };

    const handleCommand = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            if (input.trim().toLowerCase() === "home") {
                setCommands([]);
            } else {
                setCommands((prev) => [...prev, input.trim().toLowerCase()]);
            }
            setInput("");
        }
    };

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [commands]);


    return (

        <>
            <div className="terminal">
                {commands.map((cmd, index) => {
                    const Component = commandComponents[cmd];
                    return (
                        <div key={index}>
                            {Component && <Component />}
                        </div>
                    );
                })}

                <section className="command" id="command-section">
                    <p className="section-route pb"><span className="left sb">&#91;</span>&nbsp;~<span className="sb">/User/Projects/GitHub/</span>portfolio/src&nbsp; &nbsp;<span className="py"> Main &nbsp;</span></p><span className="route-rb">〉</span><span className="route-rt">⏵</span>
                    <span className="route-command">
                        <input className="input-field"  value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand} required />
                    </span>
                </section>


                <div ref={terminalEndRef}></div>
            </div>
        </>
    );
}

export default Command;