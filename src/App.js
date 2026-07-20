import "./App.css";
import React, {useEffect, useRef} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import Portfolio from "./Components/Portfolio/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
    const appRef = useRef(null);

    useEffect(() => {
        const elements = appRef.current?.querySelectorAll(".scroll-reveal");

        if (!elements?.length) return undefined;

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.15, rootMargin: "0px 0px -8% 0px"}
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={appRef}>
            <Navbar/>
            <div className="App">
                <Welcome title="Welcome" subtitle="Welcome" id="welcome"/>
                <Portfolio title="Portfolio" subtitle="Portfolio" id="portfolio"/>
                <About title="About" subtitle="About" id="about" className="fullpage"/>
                <Contact title="Contact" subtitle="Contact" id="contact"/>
            </div>
            <footer>© 2021 - 2026 Adam Olah.</footer>
        </div>
    );
}

export default App;
