import React from "react";
import { Link } from "gatsby";

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-menu">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="https://podcast.italiansmakeitbetter.com">
                            Podcast
                        </a>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <a href="https://twitter.com/gamarantor">Twitter</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
