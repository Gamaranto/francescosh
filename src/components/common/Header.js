import React from "react";

import Route from "./Route";
import HeaderLinks from "./HeaderLinks";

export default function Header(props) {
    return (
        <header className="header header-grid">
            <HeaderLinks />
            <Route location={props.location} slug={props.slug} />
        </header>
    );
}
