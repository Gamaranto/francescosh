import React from "react";
import Zombie from "../../public/images/icons/zombie.inline.svg";
import Hero from "../../public/images/icons/hero.inline.svg";

export default function Landing() {
    return (
        <main className="grid">
            <header className="box header">
                <ul className="nav-menu">
                    <li className="nav-item">Blog</li>
                    <li className="nav-item">Project</li>
                    <li className="nav-item">Podcast</li>
                    <li className="nav-item">Twitter</li>
                </ul>
            </header>

            <div className="box content">
                <h1>Ciao sono Francesco.</h1>
                <p>
                    Nice to meet you! Welcome to an avenue on my thoughts,
                    projects and life.
                </p>
            </div>
            <div className="box hero">
                <Hero />
            </div>
            <div className="box footer">Limited copiryght</div>
        </main>
    );
}
