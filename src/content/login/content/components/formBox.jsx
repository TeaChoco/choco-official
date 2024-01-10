import { useState } from "react";
import l from "./../../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function formBox(props) {
    const [formLock, setFormLock] = useState(false);

    return (
        <div className={`form-box ${props.classFormBox}`}>
            {props.btnBack ? (
                <button className="btnbackregister">
                    <I icon={fa.faLeftLong} />
                </button>
            ) : (
                ""
            )}
            <h2>{l(`login.${props.h2 ?? props.classFormBox}`)}</h2>
            <form
                className="registerform"
                onSubmit={async (event) => {
                    event.preventDefault();
                    if (formLock == true) return;
                    setFormLock(true);
                    event.content = event.target.name;
                    await props.onSubmit(event);
                    setFormLock(false);
                }}
                name={props.nameForm ?? props.classFormBox}>
                {props.children}
                <button
                    className={`btn btn-next ${formLock ? "lock" : ""}`}
                    onClick={props?.nextBoxPage}>
                    {props?.nextBtnText
                        ? l(`${props?.nextBtnText[0]}.${props?.nextBtnText[1]}`)
                        : l(`login.${props?.nextBtn ?? props.classFormBox}`)}
                </button>
            </form>
            <button
                className="toggleIndex login-link"
                onClick={props.switchBoxspage}>
                {l("login.register")}
            </button>
            <span className="lineor">
                <span>{l("general.or")}</span>
            </span>
            <props.GoogleButton />
        </div>
    );
}
