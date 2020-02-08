import React from "react";

import Zombie from "../../public/images/icons/zombie.inline.svg";

import "../styles/index.css";
import { Layout } from "../components/common";
import { Link } from "gatsby";

export default function Landing(props) {
    return (
        <Layout layoutClass="index-content">
            <div className="content">
                <div className="intro ">
                    <h1>Ciao, I am Francesco.</h1>
                    <p>
                        Nice to meet you. <br /> This is your personal window on
                        my{" "}
                        <Link to="/blog" className="intro-links">
                            thoughts
                        </Link>
                        ,{" "}
                        <Link to="/projects" className="intro-links">
                            projects
                        </Link>{" "}
                        and{" "}
                        <a
                            href="https://twitter.com/Gamarantor"
                            className="intro-links"
                        >
                            life
                        </a>
                        .
                    </p>
                </div>
            </div>
            <div className=" hero">
                <Zombie className="zombie" />
            </div>
            <div className="cta">
                <div className="triangle bottom-triangle"></div>
                <a className="email-button" href="mailto:gamarantor@gmail.com">
                    <h1> Fill My Inbox</h1>
                </a>
            </div>
        </Layout>
    );
}
