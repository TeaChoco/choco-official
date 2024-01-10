import "./css/mail.css";
import React from "react";
import l from "./../../lang/lang";

export default function mail() {
    return (
        <main className="srccontent mail">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.Mail")}</h1>
                </header>
                <div className="content"></div>
            </div>
        </main>
    );
}
