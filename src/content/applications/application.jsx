import "./css/application.css";
import "./css/components.css";
import React from "react";
import l from "./../../lang/lang";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import infoApp from './../../api/infoApp.json';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import InfoApp from "./components/infoApp";
import Comment from "./components/comment";

export default function application() {
    const { appId } = useParams();
    const info = infoApp.filter((app) => app.id == appId)[0];

    return (
        <main className="srccontent application">
            <div className="bordermax">
                <header id="header">
                    <Link to={"/applications"} className="btnback">
                        <I icon={fa.faArrowLeft} />
                    </Link>
                    <h1 id="heading">{info.name}</h1>
                </header>
                <div className="content">
                    <Link
                        to={`/app/${info.id}/`}
                        className="btn startapplication">
                        {l("application.infoApp.startapplication")}
                    </Link>
                </div>
                <InfoApp info={info} />
                <Comment info={info} />
            </div>
        </main>
    );
}
