import React from "react";

import Zombie from "../../public/images/icons/Zombie.inline.svg";

import "../styles/index.css";
import { Layout } from "../components/common";

export default function Landing(props) {
    return (
        <Layout layoutClass="index-content">
            <div className="content">
                <div className="intro ">
                    <h1>Ciao, I am Francesco.</h1>
                    <p>
                        Nice to meet you. <br /> This is your personal window on
                        my thoughts, projects and life.
                    </p>
                </div>
            </div>
            <div className=" hero">
                <Zombie />
            </div>
        </Layout>
    );
}
