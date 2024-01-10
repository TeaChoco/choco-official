import "./css/applications.css";
import "./css/components.css";
import React, { useState } from "react";
import l from "./../../lang/lang";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import ListApplication from "./components/listApplication";

export default function applications() {
    const [searchValue, setSearchValue] = useState("");
    const searchApp = (event) => {
        setSearchValue(event.target.value);
    };
    const formSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <main className="srccontent applications">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.Applications")}</h1>
                </header>
                <div className="content">
                    <form
                        className="search"
                        onSubmit={(event) => formSubmit(event)}>
                        <input
                            type="text"
                            name="search"
                            placeholder={l("searchInput.search")}
                            id="searchText"
                            value={searchValue}
                            className="searchInput"
                            autoComplete="off"
                            onChange={searchApp}
                        />
                        <button type="submit" id="searchBtn">
                            <I icon={fa.faSearch} />
                        </button>
                    </form>

                    <div className="showApplication">
                        <ListApplication searchValue={searchValue} />
                    </div>
                </div>
            </div>
        </main>
    );
}
