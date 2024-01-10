import "./css/shop.css";
import React from "react";
import l from "../../lang/lang";

export default function shop() {
    const user = null;

    return (
        <main className="srccontent shop">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">{l("menu.Shop")}</h1>
                </header>
                {/* <?php
                if (isset($_SESSION?.user'])) {
                    include __DIR__ . "/../../app/helpers/src/wallet.php";
                } ?> */}
                <div className="content contentshop" id="daily">
                    <div className="navshop">
                        <button className="page pagedaily" value="daily">
                            {l("shop.nav.pagedaily")}
                        </button>
                        <button
                            className="page pagerandombox"
                            value="randombox">
                            {l("shop.nav.pagerandombox")}
                        </button>
                        <button className="page pageteakoin" value="teakoin">
                            {l("shop.nav.pageteakoin")}
                        </button>
                    </div>
                    {/* //=============================on=daily==================================== */}
                    <div className="contentdaily">
                        <div className="circle">
                            <div className="dot"></div>
                            <svg>
                                <circle cx="145" cy="145" r="145"></circle>
                                <circle
                                    cx="145"
                                    cy="145"
                                    r="145"
                                    id="time"></circle>
                            </svg>
                            <div className="textdaily">
                                {l("shop.contentdaily.textdaily")}
                            </div>
                            <div className="time">
                                <div className="hours">00</div>
                                <div className="colon">:</div>
                                <div className="minutes">00</div>
                                <div className="colon">:</div>
                                <div className="seconds">00</div>
                            </div>
                            <div className="text60milkoin">+60 Milkoin</div>
                        </div>
                    </div>
                    {/* //=============================off=daily==================================== */}
                    {/* //=============================on=randombox==================================== */}
                    <div className="contentrandombox" id="profile">
                        <div className="navrandombox">
                            <i className="btnnavrandombox fa-solid fa-caret-right"></i>
                            <button
                                className="typerandombox active"
                                value="profile">
                                {l(
                                    "shop.contentrandombox.typerandombox.profile"
                                )}
                            </button>
                            <button
                                className="typerandombox"
                                value="background">
                                {l(
                                    "shop.contentrandombox.typerandombox.background"
                                )}
                            </button>
                        </div>
                        <div className="bannerrandombox">
                            <div className="picturebanner"></div>
                            <div className="info">
                                <span className="rate">
                                    <span className="percent">0%</span>
                                    <span className="barrate"></span>
                                    <i className="fa-solid fa-hands-holding-circle"></i>
                                </span>
                                <button className="details lock">
                                    {l("general.details")}
                                </button>
                                <button
                                    className={`history ${
                                        user == null ? "lock" : ""
                                    }`}>
                                    {l("general.history")}
                                </button>
                            </div>
                            <div className="orderbox">
                                <button
                                    value="1"
                                    id="randombox1"
                                    className={`orderbox1 ${
                                        user == null ? "lock" : ""
                                    }`}>
                                    <span>
                                        {l(
                                            "shop.contentrandombox.bannerrandombox.orderbox1"
                                        )}
                                    </span>
                                    <span>
                                        <img src="/img/koin/milkoin.png" /> x
                                        100
                                    </span>
                                </button>
                                <button
                                    value="10"
                                    id="randombox10"
                                    className={`orderbox10 ${
                                        user == null ? "lock" : ""
                                    }`}>
                                    <span>
                                        {l(
                                            "shop.contentrandombox.bannerrandombox.orderbox10"
                                        )}
                                    </span>
                                    <span>
                                        <img src="/img/koin/milkoin.png" /> x
                                        1000
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="historyrandombox">
                            <button className="backhistory">
                                <i className="fa-solid fa-left-long"></i>
                            </button>
                            <span className="header">
                                {l("general.history")}
                            </span>
                            <div className="showhistory">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{l("general.number")}</th>
                                            <th>
                                                {l(
                                                    "shop.contentrandombox.history.turn"
                                                )}
                                            </th>
                                            <th>{l("general.amount")}</th>
                                            <th>
                                                {l(
                                                    "shop.contentrandombox.history.nameitem"
                                                )}
                                            </th>
                                            <th>
                                                {l(
                                                    "shop.contentrandombox.history.typeitem"
                                                )}
                                            </th>
                                            <th>{l("general.date")}</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <?php include "page/shop/randombox.php" ?> */}
                    {/*  //=============================off=randombox==================================== */}

                    {/* //=============================on=contentteakoin==================================== */}
                    <div className="contentteakoin">
                        {/* <?php
                        $cardData = l?.shop?.contentteakoin?.koin ?? [];

                        foreach ($cardData as $index => $koin) {
                            echo '<a className="card" href="#">
                            <div className="cardtext">' .
                                ($index > 0 ? '<h2>
                                    <p>' . (l?.general?.free')) . '</p>
                                    <div>' . ($koin?.free')) . '<img src="/img/koin/teakoin.png"></div>
                                </h2>' : '') . '
                                <h3>' . ($koin?.get')) . ' <img src="/img/koin/teakoin.png"></h3>' .
                                ($index > 0 ? '<p>(' . ($koin?.normal')) . '+' . ($koin?.free')) . ')</p>' : '') .
                                '<h5>' . ($koin?.use')) . (l?.shop?.contentteakoin?.currency')) . '</h5>
                            </div>
                        </a>';
                        }
                        ?> */}
                    </div>
                    {/* //=============================off=contentteakoin==================================== */}
                </div>
                {/* <div className="content"></div> */}
            </div>
        </main>
    );
}
