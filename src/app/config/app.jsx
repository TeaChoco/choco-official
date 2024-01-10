import React from "react";
import { useParams } from "react-router-dom";
import infoApp from './../../api/infoApp.json';
import App1 from "./../1/app.jsx";
import App2 from "./../2/app.jsx";
import App6 from "./../6/app.jsx";

export default function app() {
    const { appId } = useParams();

    const applications = {
        1: <App1 />,
        2: <App2 />,
        6: <App6 />,
    };

    let showApp = <h1>Dont have this Application</h1>;

    infoApp.forEach((info) => {
        if (info.id == appId) {
            showApp = applications?.[appId] ?? (
                <h1>No found this Application</h1>
            );
        }
    });
    return <div className={`showcaseapp app${appId}`}>{showApp}</div>;
}
