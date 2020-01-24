import React from "react";

export default function Footer() {
    return (
        <footer>
            <div>
                <p>Made with 💜 by Francesco Baccetti</p>
            </div>
            <div>
                <p>Copyright {new Date().getFullYear()}©</p>
            </div>

            <nav className="footer-nav"></nav>
        </footer>
    );
}
