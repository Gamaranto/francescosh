import React from "react";
import { Link } from "gatsby";

export default function Route({ location = null, slug = null }) {
    if (location == null) {
        return null;
    }

    let { paths, lastPath } = pathFromLocation(location);

    return (
        <div className="route">
            <div className="route-links">
                {paths.map((path, key) => (
                    <Link key={key} to="/" className="route-link">
                        {path}
                    </Link>
                ))}
                <span className="route-link last-route-link">
                    {slug ? clean(slug) : clean(location.pathname)}
                </span>
            </div>
            <Link to="/">
                <h2 className="route-header">Francesco</h2>
            </Link>
        </div>
    );
}

function clean(s) {
    return s.replace(/\//g, "").replace(/-/g, " ");
}

function pathFromLocation(location) {
    let paths = location.href.match(/\b(?!\bhttps?\b)([^/])+\b/g);
    let lastPath = paths.splice(-1);
    return { paths, lastPath };
}
