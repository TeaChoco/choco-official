import "./css/setting.css";
import React from "react";
import l from "./../../lang/lang";

export default function setting() {
    return (
        <main className="srccontent setting">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.Setting")}</h1>
                </header>
                <div className="content">
                    <p className="titleSetting">
                        {l("setting.content.title.language")}
                    </p>
                    {/* <?php include "app/helpers/src/selectLang.php"; ?> */}
                </div>
                <div className="content">
                    <p className="titleSetting">
                        {l("setting.content.title.menuPosition")}
                    </p>
                    <form method="GET" className="menuPosition">
                        <span className="menuPositionText">
                            {t("setting.content.menuPosition.0")}
                        </span>
                        <input
                            className="menuPositionInput"
                            type="checkbox"
                            name="menuPosition" /*<?php if ($_SESSION?.setting?.menuPosition == 1) { ?>checked<?php } ?>*/
                        />
                        <span className="menuPositionText">
                            {t("setting.content.menuPosition.1")}
                        </span>
                    </form>
                    <p className="titleSetting">
                        {l("setting.content.title.animationBackground")}
                    </p>
                    <form method="GET" className="animationBackground">
                        <span className="animationBackgroundText">
                            {l("setting.content.animationBackground.0")}
                        </span>
                        <input
                            className="animationBackgroundInput"
                            type="checkbox"
                            name="animationBackground" /*<?php if ($_SESSION?.setting?.animationBackground == 1) { ?>checked<?php } ?>*/
                        />
                        <span className="animationBackgroundText">
                            {l("setting.content.animationBackground.1")}
                        </span>
                    </form>
                </div>
                <div className="content">
                    <p className="titleSetting">
                        {l("setting.content.title.theme")}
                    </p>
                    <div className="selectedDropTheme">
                        <div className="wrapperTheme">
                            <div className="selectedTheme">
                                {/* {t('setting.content?.theme[
                                    $_SESSION?.setting?.theme
                                ]l)} */}
                            </div>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <div className="themeBox">
                            <button value="0" className="textTheme themedark">
                                {l("setting.content.theme.0")}
                            </button>
                            <button value="1" className="textTheme themelight">
                                {l("setting.content.theme.1")}
                            </button>
                            <button
                                value="2"
                                className="textTheme themedarkwhite">
                                {l("setting.content.theme.2")}
                            </button>
                            <button
                                value="3"
                                className="textTheme themelightblack">
                                {l("setting.content.theme.3")}
                            </button>
                            <button
                                value="4"
                                className="textTheme themedarkblue">
                                {l("setting.content.theme.4")}
                            </button>
                            <button
                                value="5"
                                className="textTheme themelightblue">
                                {l("setting.content.theme.5")}
                            </button>
                            <button
                                value="6"
                                className="textTheme themedarkred">
                                {l("setting.content.theme.6")}
                            </button>
                            <button
                                value="7"
                                className="textTheme themelightred">
                                {l("setting.content.theme.7")}
                            </button>
                            <button
                                value="8"
                                className="textTheme themedarkgreen">
                                {l("setting.content.theme.8")}
                            </button>
                            <button
                                value="9"
                                className="textTheme themelightgreen">
                                {l("setting.content.theme.9")}
                            </button>
                            <button
                                value="10"
                                className="textTheme themedarkyellow">
                                {l("setting.content.theme.10")}
                            </button>
                            <button
                                value="11"
                                className="textTheme themelightyellow">
                                {l("setting.content.theme.11")}
                            </button>
                            <button value="12" className="textTheme themeblue">
                                {l("setting.content.theme.12")}
                            </button>
                            <button value="13" className="textTheme themered">
                                {l("setting.content.theme.13")}
                            </button>
                            <button value="14" className="textTheme themegreen">
                                {l("setting.content.theme.14")}
                            </button>
                            <button
                                value="15"
                                className="textTheme themeyellow">
                                {l("setting.content.theme.15")}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p className="titleSetting">
                        {l("setting.content.title.redeemCode")}
                    </p>
                    <form className="search">
                        <input
                            name="redeemcode"
                            className="redeemcode searchInput"
                            type="text"
                            autoComplete="off"
                            placeholder={l("setting.content.redeemcode")}
                        />
                        <input
                            type="submit"
                            id="searchBtn"
                            defaultValue={l("general.confirm")}
                        />
                    </form>
                </div>
            </div>
        </main>
    );
}
