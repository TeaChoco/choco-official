import "./navbar.css";
// import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
// import * as fa from "@fortawesome/free-solid-svg-icons";
import l from "../../lang/lang";
import { Link } from "react-router-dom";
import Navlist from "./components/navlist";
import NavProfile from "./components/navProfile";
import { useState } from "react";
import icon from "./../../public/img/icon.png";

export default function navbar({ funOpenMenu }) {
    const [openNavMenu, setOpenNavMenu] = useState(false);
    const listText = (text) =>
        l(`menu.${text.charAt(0).toUpperCase() + text.slice(1)}`);

    return (
        <>
            <nav>
                <div
                    className="buttonMenu container"
                    onClick={() => {
                        funOpenMenu();
                        setOpenNavMenu(false);
                    }}>
                    <div className="buttonMenubar1"></div>
                    <div className="buttonMenubar2"></div>
                    <div className="buttonMenubar3"></div>
                </div>
                <Link to="/">
                    <img src={icon} id="icon"></img>
                </Link>
                <div className="navigation">
                    <ul>
                        <Navlist />
                        <NavProfile
                            openNavMenu={openNavMenu}
                            setOpenNavMenu={setOpenNavMenu}
                        />
                    </ul>
                </div>
                <a href="#" className="footerBtnUp">
                    <i className="fa-solid fa-arrow-up"></i>
                </a>
            </nav>
        </>
    );
}
