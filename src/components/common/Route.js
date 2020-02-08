import React from "react";
import { Link } from "gatsby";

import { pathFromLocation } from "../../utils/fns";

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
                <span className="route-link last-route-link">{lastPath}</span>
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
