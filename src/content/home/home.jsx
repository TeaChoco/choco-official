import "./css/home.css";
import React from "react";
import l from "./../../lang/lang.jsx";

export default function home() {
    return (
        <main className="srccontent home">
            <div className="bordermax">
                <div className="contenttitle">
                    <img
                        src="/icon.png"
                        alt="icon web"
                        className="imgchocowebicon"
                    />
                    <p className="textwelcome">
                        {l("home.welcome")}
                    </p>
                </div>
                <div className="section"></div>
                <div className="section features"></div>
            </div>
        </main>
    );
}
