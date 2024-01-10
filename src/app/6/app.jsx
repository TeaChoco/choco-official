import "./css/app.css";
import React from "react";
import setLang from "./lang/i18n.jsx";
import { useParams } from "react-router-dom";

export default function app() {
    const { appId, param1 } = useParams();
    setLang(appId);

    return <></>;
}
