import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import al from "./../../lang/lang.jsx";

export default function navbar() {
    return (
        <nav className="navbar" id="read">
            <button className="btn setting">
                <I icon={fa.faGears} />
            </button>
            <div className="center">
                <div className="innav read">
                    <button className="btn btnnav read">
                        <I icon={fa.faBars} />
                    </button>
                    <div className="divnav off">
                        <button className="btn play">
                            <I icon={fa.faPlay} />
                        </button>
                        <div className="divsetread type" id="hiragana">
                            <button
                                className="setread hiragana"
                                value="hiragana">
                                {al("character.hiragana.text")}
                            </button>
                            <button
                                className="setread katakana"
                                value="katakana">
                                {al("character.katakana.text")}
                            </button>
                        </div>
                        <div className="divsetread sound" id="unvoiced">
                            <button
                                className="setread unvoiced"
                                value="unvoiced">
                                {al("character.unvoiced.text")}
                            </button>
                            <button className="setread voiced" value="voiced">
                                {al("character.voiced.text")}
                            </button>
                            <button
                                className="setread bendsound"
                                value="bendsound">
                                {al("character.bendsound.text")}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="innav test"></div>
                <div className="innav testing">
                    <button className="btn btnendgame">
                        <I icon={fa.faStop} />
                        {al("nav.endgame")}
                    </button>
                </div>
            </div>
            <button className="btn start">
                <I icon={fa.faForward} />
            </button>
            <button className="btn back">
                <I icon={fa.faBackward} />
            </button>
        </nav>
    );
}
