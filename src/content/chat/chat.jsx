import "./css/chat.css";
import React from "react";
import l from "./../../lang/lang.jsx";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function chat() {
    return (
        <main className="srccontent chat">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.Chat")}</h1>
                </header>

                <div className="content">
                    <div className="search">
                        <input
                            type="text"
                            name="search"
                            placeholder={l("searchInput.searchNameUid")}
                            className="searchInput"
                        />
                        <button id="searchBtn">
                            <I icon={fa.faSearch} />
                        </button>
                    </div>
                    <div className="chatList"></div>
                </div>
            </div>
        </main>
    );
}
