import React from "react";
import { Link } from "gatsby";

export default function Route({ location = null, slug = null }) {
    console.log(slug);
    if (location == null) {
        return null;
    }
    return (
        <div className="route">
            <div className="route-links">
                <Link to="/" className="route-link">
                    Francesco.sh
                </Link>
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
