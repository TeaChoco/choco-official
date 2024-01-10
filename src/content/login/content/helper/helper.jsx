import "./helper.css";
import l from "./../../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function helper({ funOpenHelper }) {
    return (
        <div className="backhelper" onClick={funOpenHelper}>
            <div className="helper"></div>
        </div>
    );
}
