import React from "react";
import '../css/contact.scss'

function Contact() {

    return (
        <section className="contact" id="contact-section">
            <p className="section-route pb"><span className="left sb">&#91;</span>&nbsp;~<span className="sb">/User/Projects/GitHub/</span>portfolio/src&nbsp; &nbsp;<span className="py"> Main &nbsp;</span></p><span className="route-rb">〉</span><span className="route-rt">⏵</span><span className="route-command">contact</span>
            <div className="contact-description">
            <p>Name: Rathin Rachhadiya</p>
            <br />
            <p>Email: <a href="mailto:rathin1514@gmail.com" className="link">rathin1514@gmail.com</a></p>
            <br />
            <p><a href="https://github.com/rathin1514" className="link" target="_blank">&#91;GitHub&#93;</a> &nbsp; <a href="https://www.linkedin.com/in/rathinrachhadiya" className="link" target="_blank">&#91;LinkedIn&#93;</a> &nbsp; <a href="https://www.instagram.com/rathinrachhadiya/" className="link" target="_blank">&#91;Instagram&#93;</a></p>
            <br />
            <p>Location: 95028 Hof, BY</p>
            </div>
        </section>
    );
}

export default Contact;