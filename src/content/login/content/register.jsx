import l from "../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function register() {
    return (
        <div className="form-box register">
            <button className="btnbackregister" defaultValue="1">
                <I icon={fa.faLeftLong} />
            </button>
            <h2>{l("login.register")}</h2>
            <form className="registerform">
                <div className="input-box">
                    <label htmlFor="name">
                        <i className="fa-regular fa-user"></i>
                        {l("login.name")}
                    </label>
                    <input
                        defaultValue=""
                        name="name"
                        id="name"
                        className="textbox"
                        type="text"
                        placeholder={l("login.name")}
                        maxLength="30"
                    />
                </div>
                <div className="input-box username">
                    <label htmlFor="username">
                        <i className="fa-solid fa-user"></i>
                        {l("login.username")}
                    </label>
                    <input
                        defaultValue=""
                        name="username"
                        id="username"
                        className="textbox username"
                        type="text"
                        placeholder={l("login.username")}
                        maxLength="30"
                    />
                    <span className="warninput username">
                        {l("login.warninput.username")}
                    </span>
                </div>
                <div className="input-box password2">
                    <label htmlFor="password">
                        <i className="fa-solid fa-key"></i>
                        {l("login.password")}
                    </label>
                    <input
                        defaultValue=""
                        name="password"
                        className="textbox password2"
                        id="password"
                        placeholder={l("login.password")}
                        type="password"
                    />
                    <div className="btnshowpassword2">
                        <i
                            id="btnshowpassword2"
                            className="fa-solid fa-eye"></i>
                    </div>
                    <span className="warninput password">
                        {l("login.warninput.password")}
                    </span>
                </div>
                <div className="input-box password3">
                    <label htmlFor="password_confirm">
                        <i className="fa-solid fa-key"></i>
                        {l("login.passwordconfirm")}
                    </label>
                    <input
                        defaultValue=""
                        name="password_confirm"
                        className="textbox password3"
                        id="password_confirm"
                        placeholder={l("login.passwordconfirm")}
                        type="password"
                    />
                    <div className="btnshowpassword3">
                        <i
                            id="btnshowpassword3"
                            className="fa-solid fa-eye"></i>
                    </div>
                    <span className="warninput password">
                        {l("login.warninput.passwordconfirm")}
                    </span>
                </div>
                <button className="btn btn-next" defaultValue="3">
                    {l("general.next")}
                </button>
            </form>
            <button className="toggleIndex register-link">
                {l("login.login")}
            </button>
        </div>
    );
}
