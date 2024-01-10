import { v4 } from "uuid";
import lists from "../../menu/menu.json";
import l from "../../../lang/lang";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function navlist() {
    const listText = (text) =>
        l(`menu.${text.charAt(0).toUpperCase() + text.slice(1)}`);

    const arrayNavMenuList = [
        "applications",
        "novels",
        "chat",
        "shop",
        "inventory",
        "news",
    ];

    const navMenuList = lists.filter((list) => {
        return arrayNavMenuList.find((e) => e == list.menu);
    });

    return navMenuList.map((element, index) => {
        return (
            <li className="navlist" key={v4()}>
                <NavLink to={`/${element.menu}`}>
                    <span className="navicon">
                        <I icon={fa[element.icon]} />
                    </span>
                    <span className="navtext">{listText(element.menu)}</span>
                </NavLink>
            </li>
        );
    });
}
