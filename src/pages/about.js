import React from "react";

import { Layout, ProjectBox } from "../components/common";

import "../styles/about.css";

export default function About(props) {
    return (
        <Layout location={props.location}>
            <section className="projects">
                <ProjectBox title="1" order={1} />
                <ProjectBox title="2" order={2} />
                <ProjectBox title="3" order={3} />
                <ProjectBox title="4" order={4} />
                <ProjectBox title="5" order={5} />
            </section>
        </Layout>
    );
}
