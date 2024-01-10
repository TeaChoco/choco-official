import l from "./../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function edit() {
    return (
        <div
            className="form-box edit"
            // id="<?php if (isset($_SESSION['verifyedit']['id'])) {
            //                                             echo $_SESSION['verifyedit']['id'];
            //                                         } ?>"
        >
            <h2>{l("profile.account.management")}</h2>
            <form className="registerform">
                <div className="input-box email">
                    <label htmlFor="editemail">
                        <I icon={fa.faEnvelope} />
                        {l("login.email")}
                    </label>
                    <input
                        name="email"
                        id="editemail"
                        className="textbox"
                        type="text"
                        placeholder={l("login.email")}
                        defaultValue="@gmail.com"
                    />
                </div>
                <div className="input-box username">
                    <label htmlFor="editusername">
                        <I icon={fa.faUser} />
                        {l("login.username")}
                    </label>
                    <input
                        defaultValue=""
                        name="username"
                        id="editusername"
                        className="textbox username"
                        type="text"
                        placeholder={l("login.username")}
                        maxLength="30"
                    />
                    <span className="warninput username">
                        {l("login?.warninput?.username")}
                    </span>
                </div>
                <div className="input-box password">
                    <label htmlFor="editpassword">
                        <i className="fa-solid fa-key"></i>
                        {l("login?.password")}
                    </label>
                    <input
                        defaultValue=""
                        name="password"
                        className="textbox password"
                        id="editpassword"
                        placeholder={l("login?.password")}
                        type="password"
                    />
                    <div className="btnshowpassword">
                        <i id="btnshowpassword" className="fa-solid fa-eye"></i>
                    </div>
                    <span className="warninput password"></span>
                </div>
                <button className="btn btn-next" defaultValue="9">
                    {l("login?.examine")}
                </button>
            </form>
        </div>
    );
}
