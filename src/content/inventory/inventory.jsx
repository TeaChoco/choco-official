import "./css/inventory.css";
import React from "react";
import l from "./../../lang/lang";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function inventory() {
    return (
        <main className="srccontent inventory">
            <div className="bordermax">
                <header id="header">
                    <h1 id="heading">
                        {l("menu.Inventory")}
                    </h1>
                </header>
                {/* <?php if (isset($_SESSION['user'])) {
                    include "app/helpers/src/wallet.php";
                } ?> */}
                <div className="content" id="profile">
                    <div className="navinventory">
                        <button value="profile" className="page active">
                            <I icon={fa.faAddressCard} />
                        </button>
                        <button className="page"></button>
                        <button className="page"></button>
                        <button className="page"></button>
                    </div>
                    <div className="treasury"></div>
                </div>
            </div>
        </main>
    );
}
