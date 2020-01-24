import React, { useEffect, useRef } from "react";
import { TweenMax, Elastic } from "gsap";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProjectBox from "../components/common/ProjectBox";
import Line from "../../public/images/icons/Line.inline.svg";

import "../styles/about.css";

export default function About() {
    useEffect(() => {
        TweenMax.from(".project-box", {
            duration: 3,
            delay: 0.3,
            stagger: 0.4,
            y: -300,
            ease: Elastic.easeOut
        });
    });
    return (
        <>
            <Header />
            <section className=" projects">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </section>
            <Footer />
        </>
    );
}
