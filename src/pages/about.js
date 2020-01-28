import React from "react";

import { Layout, ProjectBox } from "../components/common";

export default function About(props) {
    return (
        <Layout location={props.location}>
            <section className=" projects">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </section>
        </Layout>
    );
}
