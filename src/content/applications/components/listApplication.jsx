import React from "react";
import l from "./../../../lang/lang.jsx";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import infoApp from "./../../../api/infoApp.json";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

export default function listApplication({ searchValue }) {
    return (
        <>
            {infoApp.map((info) => {
                if (
                    searchValue == "" ||
                    info.name.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                    if (info.price == 0) {
                        info.price = "free";
                    }
                    const version = Object.keys(info.version);
                    const lastVersion = version[version.length - 1];
                    return (
                        <Link
                            to={`/applications/${info.id}`}
                            className="linktoinfoapp"
                            key={v4()}>
                            <img className="imgapp" />
                            <div className="left">
                                <span className="nameapp">{info.name}</span>
                                <span className="priceapp">{info.price}</span>
                                <span className="explanationapp">
                                    {
                                        info.explanation[
                                            localStorage.getItem("setting lang")
                                        ]
                                    }
                                </span>
                            </div>
                            <div className="right">
                                <div className="ratingapp">
                                    <I icon={fa.faStar} />
                                    <I icon={fa.faStar} />
                                    <I icon={fa.faStar} />
                                    <I icon={fa.faStar} />
                                    <I icon={fa.faStar} />
                                </div>
                                <span className="versionapp">
                                    {l("application.versionapp") +
                                        " " +
                                        lastVersion}
                                </span>
                                <div className="typeapp">
                                    {info.type.map((type) => (
                                        <span
                                            key={v4()}
                                            className={`apptype ${type.text}`}>
                                            {type.emoji + type.text}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    );
                }
            })}
        </>
    );
}
