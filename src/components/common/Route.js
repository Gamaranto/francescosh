import React from "react";
import { Link } from "gatsby";

import { pathFromLocation, clean, capitalize } from "../../utils/fns";

export default function Route({ location = null, slug = null }) {
    if (location == null) {
        return null;
    }

    let { hostname, paths, lastPath } = pathFromLocation(location);
    console.log({ paths, lastPath, location, hostname });

    return (
        <div className="route">
            <div className="route-links">
                <Link to="/" className="route-link">
                    {capitalize(hostname)}
                </Link>
                {paths.map((path, key) => (
                    <Link key={key} to={`/${path}`} className="route-link">
                        {path}
                    </Link>
                ))}
                <span className="route-link last-route-link">
                    {clean(lastPath)}
                </span>
            </div>
            <Link to="/">
                <h2 className="route-header">Francesco</h2>
            </Link>
        </div>
    );
}
