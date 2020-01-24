import React from "react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import "../styles/landing.css";

export default function Landing() {
    return (
        <main className="grid">
            <Header />
            <div className=" content">
                <div className="intro">
                    <h1>Ciao, I am Francesco.</h1>
                    <p>
                        Nice to meet you. <br /> This is your personal window on
                        my thoughts, projects and life.
                    </p>
                </div>
            </div>
            <div className=" hero"></div>
            <Footer />
        </main>
    );
}
