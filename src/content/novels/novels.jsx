import "./css/novels.css";
import React from "react";
import l from "../../lang/lang";

export default function novels() {
    return (
        <main className="srccontent novels">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.Novels")}</h1>
                </header>
                <div className="content"></div>
            </div>
        </main>
    );
}
