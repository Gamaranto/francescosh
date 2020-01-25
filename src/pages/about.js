import React from "react";

import { Layout } from "../components/common";
import ProjectBox from "../components/common/ProjectBox";

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
