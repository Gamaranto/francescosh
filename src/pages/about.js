import React from "react";

import { Layout, ProjectCard } from "../components/common";

import "../styles/about.css";

export default function About(props) {
    return (
        <Layout location={props.location}>
            <section className="projects">
                <ProjectCard
                    title="Notion.js"
                    order={1}
                    imgsrc="static/images/icons/notion.svg"
                />
                <ProjectCard title="Cercacasa.js" order={2} />
                <ProjectCard title="4Chan API" order={3} />
                <ProjectCard title="Create-js-app" order={4} />
                <ProjectCard title="betterDM" order={5} />
            </section>
        </Layout>
    );
}
