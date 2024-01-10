import l from "./../../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function inputBox(props) {
    return (
        <div className={`input-box ${props.class ?? props.name}`}>
            <label htmlFor={props.name}>
                <I icon={fa[props.icon]} />
                {l(`login.${props.text ?? props.name}`)}
            </label>
            <input
                value={props.value}
                name={props.name}
                id={props.name}
                className="textbox"
                type={props.type ?? "text"}
                placeholder={l(`login.${props.placeholder ?? props.name}`)}
                onChange={props.onChange}
            />
            {props.children}
        </div>
    );
}
