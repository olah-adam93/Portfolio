import React, {useEffect, useRef} from "react";
import image from "./linkedinPhoto.jpg";
import Typed from "react-typed";
import "./Welcome.css";

const Welcome = (props) => {
    const welcomeRef = useRef(null);

    useEffect(() => {
        const welcome = welcomeRef.current;
        const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

        if (!welcome || reduceMotion) return undefined;

        let frameId = null;
        const updateParallax = () => {
            const progress = Math.min(window.scrollY / window.innerHeight, 1);
            welcome.style.setProperty("--welcome-scroll", progress);
            frameId = null;
        };

        const handleScroll = () => {
            if (frameId === null) frameId = window.requestAnimationFrame(updateParallax);
        };

        updateParallax();
        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (frameId !== null) window.cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div id={props.id} className="fullpage" ref={welcomeRef}>
            <div className="welcome-container">
                <section className="welcome-image">
                    <img src={image} alt="linkedinPhoto" className="linkedinPhoto"/>
                </section>
                <section className="welcome-text">
                    <div className="text-div">
                        <h2>Welcome! My name is</h2>
                        <h1 className="welcome-h1">Adam Olah</h1>
                        <div className="welcome-h2">
                            <span>I'm a </span>
                            <h3 className="welcome-h3">
                                <Typed
                                    strings={["Software", "Full-stack", "Web"]}
                                    typeSpeed={120}
                                    loop
                                />
                            </h3>
                            <p>developer</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Welcome;
