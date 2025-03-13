import React, { useState } from "react";
import '../css/project.scss'
import Astern from '../assets/astern.svg'
import SkyTeam from '../assets/skyteam.svg'
import Amazon from '../assets/amazon.svg'

function Project() {

  const [videoId, setVideoId] = useState(null);

  const openModal = (id) => {
    setVideoId(id);
  };

  const closeModal = () => {
    setVideoId(null);
  };

    return (
        <section className="project" id="project-section">
            <p className="section-route pb"><span className="left sb">&#91;</span>&nbsp;~<span className="sb">/User/Projects/GitHub/</span>portfolio/src&nbsp; &nbsp;<span className="py"> Main &nbsp;</span></p><span className="route-rb">〉</span><span className="route-rt">⏵</span><span className="route-command">projects</span>
            <div className="project-description">
                <div className="qr-code">
                    <br />
                    <img src={Astern} alt="qr-code" />
                    <a href="https://a-sternfitness.vercel.app" className="link" target="_blank">&#91;Fitness App&#93;</a>
                </div>
                <div>
                    <p className="sy">A Stern Fitness:</p>
                    <p>Fitness Web Application which revolves around 3 subscription models with possibility to switch plans and chat with a certified trainer in case you need more support.</p>
                    <p>As an admin you manage all website contents like Exercises, Training Plans, Recipes and Trainers including Newsletters.</p>
                    <p>Trainer can provide assistance to the users through chat feature.</p>
                    <p>Users has different features depending on their subscription tier such as no. of training plan suggestions and messaging possibilities.</p>
                    <p>Register to try more!</p>
                    <br />
                    <p>Tech Stack: &#91;Laravel&#93;  &#91;React&#93;  &#91;Bootstrap&#93;</p>
                    <br />
                    <p>GitHub link: <a href="https://github.com/rathin1514/FitnessApp" className="link" target="_blank">&#91;GitHub&#93;</a></p>
                </div>

                <div className="qr-code">
                    <br />
                    <img src={SkyTeam} alt="qr-code" />
                    <a onClick={() => openModal("i8QD29fljqw")} className="link qr-link" target="_blank">&#91;Board Game&#93;</a>
                </div>
                <div>
                    <p className="sy">Sky Team:</p>
                    <p>This is a digital version of SkyTeam board game which is originally designed by Luc Rémond and published by many publishers all around the world.</p>
                    <p>Sky Team is a co-operative game, exclusively for two players, in which you play a pilot and co-pilot at the controls of an airliner. Your goal is to work together as a team to land your airplane in different airports around the world.</p>
                    <p>Watch demo video from link below the QR Code!</p>
                    <br />
                    <p>Tech Stack: &#91;Java&#93;  &#91;libGDX&#93;  &#91;JUnit&#93;</p>
                    <br />
                    <p>GitHub link: <a href="https://github.com/rathin1514/SkyTeam-Game" className="link" target="_blank">&#91;GitHub&#93;</a></p>
                </div>

                <div className="qr-code">
                    <br />
                    <img src={Amazon} alt="qr-code" />
                    <a onClick={() => openModal("i8QD29fljqw")} className="link qr-link" target="_blank">&#91;e-Commerce&#93;</a>
                </div>
                <div>
                    <p className="sy">Amazon Clone:</p>
                    <p>This is a functional clone of Amazon.com, created using pure JavaScript, HTML, and CSS, without any frameworks or libraries.</p>
                    <p>The project replicates the core features of the popular e-commerce platform, allowing users to browse products, add them to the shopping cart, and proceed to a simulated checkout process. The clone includes features such as dynamic cart updates and a simple user interface resembling the original website.</p>
                    <p>Checkout that link below the QR Code!</p>
                    <br />
                    <p>Tech Stack: &#91;JavaScript&#93;  &#91;HTML&#93;  &#91;CSS&#93;</p>
                    <br />
                    <p>GitHub link: <a href="https://rathin1514.github.io/Amazon/" className="link" target="_blank">&#91;GitHub&#93;</a></p>
                </div>
            </div>

            <div>
                {videoId && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                title="YouTube video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                            <button
                                className="close-button"
                                onClick={closeModal}
                            >X</button>
                        </div>
                    </div>
                )}
            </div>

        </section>
    );
}

export default Project;