import "./css/app.css";
import React from "react";
import setLang from "./lang/i18n.jsx";
import { useParams } from "react-router-dom";

import Setting from "./components/setting/setting.jsx";
import Navbar from "./components/navbar/navbar.jsx";
// import Test from "./components/test/test.jsx";

export default function app() {
    const { appId, param1 } = useParams();
    setLang(appId);

    return (
        <>
            <Setting />
            <Navbar />
            <section className="showcase read active" id="hiragana">
                <div className="box read" id="unvoiced"></div>
            </section>
            {/* <Test /> */}
        </>
    );
}
