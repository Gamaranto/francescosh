import React from "react";
import { Link } from "gatsby";

export default function HeaderLinks() {
    return (
        <nav className="nav-menu">
            <Link to="/about">About</Link>

            <a href="https://podcast.italiansmakeitbetter.com">Podcast</a>

            <Link to="/blog">Blog</Link>

            <a href="https://twitter.com/gamarantor">Twitter</a>
        </nav>
    );
}
