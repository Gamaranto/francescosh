import React from "react";

export default function ProjectCard({ title, order, imgsrc }) {
    return isOdd(order) ? (
        <>
            <article className="project-card">
                <h3>{title}</h3>
                <img src={imgsrc} alt={`${title} logo`} />
                <p>This is such an amazing project. {imgsrc}</p>
            </article>
            <div className="ws"></div>
        </>
    ) : (
        <>
            <div className="ws"></div>
            <article className="project-card">
                <h3>{title}</h3>
                <img src={imgsrc} alt={`${title} logo`} />
                <p>This is such an amazing project.</p>
            </article>
        </>
    );
}

function isOdd(n) {
    return n % 2 === 1;
}
