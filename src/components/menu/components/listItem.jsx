import { v4 } from "uuid";
import lists from "../menu.json";
import l from "../../../lang/lang";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function listItem() {
    const listText = (text) =>
        l(`menu.${text.charAt(0).toUpperCase() + text.slice(1)}`);

    return lists.map((element, index) => {
        element.i = 50 - index;
        return (
            <li
                key={v4()}
                style={{ "--clr": element.clr, "--i": element.i }}
                data-text={listText(element.menu)}>
                <NavLink to={`/${element.menu}`}>
                    <p>{listText(element.menu)}</p>
                </NavLink>
                <I icon={fa[element.icon]} />
            </li>
        );
    });
}
