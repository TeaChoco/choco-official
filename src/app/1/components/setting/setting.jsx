import React, { useEffect, useState } from "react";
import l from "./../../../../lang/lang.jsx";
import Settingapp from "./../../config/setting.jsx";
import { Link } from "react-router-dom";

export default function setting() {
    const selectLang = "";
    const settingapp = Settingapp();
    const [volume, setVolume] = useState(settingapp.setting.volume);

    const changeVolume = (e) => {
        setVolume(e.target.value);
        settingapp.setting.volume = volume;
        Settingapp(settingapp);
    };

    return (
        <>
            <div className="mainsetting">
                <span className="title">{l("menu.Setting")}</span>
                <div className="informsetting">
                    <label htmlFor="time">
                        {l("setting.content.title.volume")}
                    </label>
                    <span className="rangeValue volume">{volume}</span>
                    <input
                        type="range"
                        name="volume"
                        defaultValue={volume}
                        min="0"
                        max="10"
                        id="volume"
                        step="1"
                        className="range inputsetting volume"
                        onChange={(e) => changeVolume(e)}
                    />
                </div>
                <div className="informsetting">
                    <label htmlFor="lang">
                        {l("setting.content.title.language")}
                    </label>
                    {selectLang}
                </div>
                <Link to="/application/1" className="btn exit">
                    {l("general.exit")}
                </Link>
            </div>
            <div className="backmainsetting"></div>
        </>
    );
}
