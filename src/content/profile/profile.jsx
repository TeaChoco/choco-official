import "./css/profile.css";
import React from "react";
import l from "../../lang/lang";
import Base from "./components/base/base.jsx";
import Custom from "./components/custom/custom.jsx";

export default function profile() {
    return (
        <main className="srccontent profile">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.Profile")}</h1>
                </header>
                <Base />
                <Custom />
            </div>
        </main>
    );
}
