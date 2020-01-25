import React, { useEffect, useRef } from "react";
import { TweenMax, Elastic } from "gsap";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProjectBox from "../components/common/ProjectBox";

import "../styles/about.css";

export default function About(props) {
    return (
        <>
            <Header {...props} />

            <section className=" projects">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </section>
            <Footer />
        </>
    );
}
