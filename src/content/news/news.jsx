import "./css/news.css";
import React from "react";
import l from "./../../lang/lang";

export default function news() {
    return (
        <main className="srccontent news">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.News")}</h1>
                </header>
                <div className="content"></div>
            </div>
        </main>
    );
}
