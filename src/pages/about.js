import React from "react";

import { Layout, ProjectBox } from "../components/common";

export default function About(props) {
    return (
        <Layout path={props.path}>
            <section className=" projects">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </section>
        </Layout>
    );
}
