import React from "react";
import { Link } from "gatsby";

export default function Route({ path }) {
    if (path === "/") {
        return null;
    }
    return (
        <div className="route">
            <Link to="/" className="route-link">
                Francesco.sh
            </Link>
            <span className="current-route-link">
                {`${path.replace(/\//g, "")}`}
            </span>
        </div>
    );
}
