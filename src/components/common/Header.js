import React from "react";
import { Link } from "gatsby";

import Route from "./Route";

export default function Header(props) {
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
            <Route path={props.path} />
        </header>
    );
}
