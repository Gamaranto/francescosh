import React from "react";
import { graphql } from "gatsby";

import { Layout, ProjectCard } from "../components/common";
import { isOdd } from "../utils/fns";

import "../styles/projects.css";

export default function Projects({ data, location }) {
    let { nodes: repos } = data.githubData.data.user.repositories;
    return (
        <Layout location={location}>
            <section className="projects">
                {repos.map((repo, key) => {
                    return isOdd(key) ? (
                        <>
                            <ProjectCard
                                title={repo.name}
                                url={repo.url}
                                description={repo.description}
                                order={key}
                                key={key}
                            />
                            <div className="ws"></div>
                        </>
                    ) : (
                        <>
                            <div className="ws"></div>
                            <ProjectCard
                                title={repo.name}
                                url={repo.url}
                                description={repo.description}
                                order={key}
                                key={key}
                            />
                        </>
                    );
                })}
            </section>
        </Layout>
    );
}

export const query = graphql`
    {
        githubData {
            data {
                user {
                    repositories {
                        nodes {
                            description
                            name
                            url
                            stargazers {
                                totalCount
                            }
                        }
                    }
                }
            }
        }
    }
`;
