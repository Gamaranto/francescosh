import React from "react";

import GitHubIcon from "../../../static/images/icons/github.inline.svg";
import { isOdd } from "../../utils/fns";

export default function ProjectCard({ title, order, url, description }) {
    return (
        <article
            className={`project-card ${
                isOdd(order) ? "project-odd" : "project-even"
            }`}
        >
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-card-footer">
                <a href={url} className="gh-icon">
                    <GitHubIcon />
                </a>
            </div>
        </article>
    );
}
