import React from "react";
import l from "./../../../lang/lang";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";

const date = (text) => text.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

export default function infoApp({ info }) {
    const infotype = (
        <>
            {l("application.infoApp.infoapp.type") + " : "}
            {info.type.map((type) => (
                <span key={v4()} className={`apptype ${type.text}`}>
                    {type.emoji + type.text}
                </span>
            ))}
        </>
    );

    let infosize = l("application.infoApp.infoapp.size") + " : ";
    if (info.size == "full") {
        infosize += l("application.infoApp.infoapp.full");
    } else {
        infosize += info.size;
    }

    const infoplatform = (
        <>
            {l("application.infoApp.infoapp.type") + " : "}
            {info.platform === 0 && (
                <span className="platformapp">
                    <I icon={fa.faLaptop} />
                    PC
                </span>
            )}
            {info.platform === 1 && (
                <span className="platformapp">
                    <I icon={fa.faMobile} />
                    Mobile
                </span>
            )}
            {info.platform === 2 && (
                <>
                    <span className="platformapp">
                        <I icon={fa.faLaptop} />
                        PC
                    </span>
                    {" " + l("general.and") + " "}
                    <span className="platformapp">
                        <I icon={fa.faMobile} />
                        Mobile
                    </span>
                </>
            )}
        </>
    );

    const infolanguages = (
        <>
            {l("application.infoApp.infoapp.languages") + " : "}
            {info.languages.map((languages) => (
                <span key={v4()} className="applanguages">
                    {l(`listLang.list ${languages}`)}
                </span>
            ))}
        </>
    );

    const version = Object.keys(info.version);
    const lastVersion = version[version.length - 1];
    const infoversion = (
        <>
            {l("application.versionapp") + " : "}
            {lastVersion}
        </>
    );

    const update = Object.values(info.version);
    const inforelease = (
        <span>
            {l("application.infoApp.infoapp.release") + " : "}
            {date(update[0].date)}
        </span>
    );
    const infoupdate = (
        <span>
            {l("application.infoApp.infoapp.update") + " : "}
            {date(update[update.length - 1].date)}
        </span>
    );

    const infodeveloper = (
        <>
            {l("application.infoApp.infoapp.developer") + " : "}
            {info.developer.map((developer) => (
                <span key={v4()}>{developer.name}</span>
            ))}
        </>
    );

    const infoprice = (
        <>
            {l("application.infoApp.infoapp.price") + " : "}
            {info.price == "free" ? l("general.free") : info.price}
        </>
    );

    const explanation = Object.keys(info.explanation);
    const infoexplanation = (
        <>
            {l("application.infoApp.infoapp.explanation") + " : "}
            {info.explanation[localStorage.getItem("setting lang")] ??
                info.explanation[explanation[0]]}
        </>
    );

    return (
        <div className="content infoapp">
            <div className="typeapp">{infotype}</div>
            <div className="sizeapp">{infosize}</div>
            <div className="platformapp">{infoplatform}</div>
            <div className="languagesapp">{infolanguages}</div>
            <div className="versionapp">{infoversion}</div>
            <div className="releaseapp">{inforelease}</div>
            <div className="updateapp">{infoupdate}</div>
            <div className="developerapp">{infodeveloper}</div>
            <div className="priceapp">{infoprice}</div>
            <div className="ratingapp"></div>
            <div className="explanationapp">{infoexplanation}</div>
        </div>
    );
}
