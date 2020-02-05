import React from "react";

export default function ProjectBox({ title, order }) {
    return isOdd(order) ? (
        <>
            <article className="project-box">
                <h3>{title}</h3>
            </article>
            <div className="ws"></div>
        </>
    ) : (
        <>
            <div className="ws"></div>
            <article className="project-box">
                <h3>{title}</h3>
            </article>
        </>
    );
}

function isOdd(n) {
    return n % 2 === 1;
}
