import { v4 } from "uuid";
import l from "../../../lang/lang";
import lists from "../../menu/menu.json";
import { Link } from "react-router-dom";
import { gapi } from "gapi-script";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../context/auth";
import PictureProfile from "./../../pictureProfile/pictureProfile.jsx";

export default function navProfile({ openNavMenu, setOpenNavMenu }) {
    const { auth, setAuth } = useAuth();
    console.log(auth);

    const listText = (text) =>
        l(`menu.${text.charAt(0).toUpperCase() + text.slice(1)}`);

    const logOut = () => {
        if (auth?.data?.with?.google) {
            const auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                console.log("Auth signed out.");
                // ดำเนินการลบ token หรือทำความสะอาดข้อมูลที่ต้องการ
            });
        }
        setAuth(null);
    };

    const funOpenNavMenu = () => {
        setOpenNavMenu(!openNavMenu);
    };

    const arrayNavMenuList = [
        "profile",
        "shop",
        "character",
        "inventory",
        "setting",
    ];

    const navMenuList = lists.filter((list) => {
        return arrayNavMenuList.find((e) => e == list.menu);
    });

    return (
        <li className="navlist">
            <div
                id="navProfile"
                className="navProfile"
                onClick={funOpenNavMenu}>
                <p>{auth?.data?.name ?? l("login.unknowuser")}</p>
                <PictureProfile uid={auth?.data?.uid ?? null} />
                <div className={`navmenu ${openNavMenu ? "active" : ""}`}>
                    <ul>
                        {navMenuList.map((element) => {
                            return (
                                <li key={v4()}>
                                    <Link to={`/${element.menu}`}>
                                        <I icon={fa[element.icon]} />
                                        {listText(element.menu)}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            {auth?.data == null ? (
                                <Link
                                    to={`${
                                        window.location.pathname == "/"
                                            ? "/home"
                                            : window.location.pathname
                                    }/login`}>
                                    <I icon={fa.faRightToBracket} />
                                    {l("login.login")}
                                </Link>
                            ) : (
                                <button onClick={logOut}>
                                    <I icon={fa.faRightFromBracket} />
                                    {l("login.logout")}
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
}
