import "./menu.css";
import l from "../../lang/lang";
import ListItem from "./components/listItem";

export default function menu({ funOpenMenu }) {
    return (
        <>
            <div className="menu" onClick={funOpenMenu}>
                <ul>
                    <p className="textMenu">{l("menu.textmenu")}</p>
                    <ListItem />
                </ul>
            </div>
            <div className="cancelMenu" onClick={funOpenMenu}></div>
        </>
    );
}
