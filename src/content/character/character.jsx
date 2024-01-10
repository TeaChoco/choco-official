import "./css/character.css";
import React from "react";
import l from "./../../lang/lang";

export default function character() {
    return (
        <main className="srccontent character">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.Character")}</h1>
                </header>
                <div className="content"></div>
            </div>
        </main>
    );
}
