import l from "./../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function friend() {
    return (
        <div className="form-box friend">
            <h2>{l("login.yourfriend")}</h2>
            <form className="registerform">
                <div className="infoyourfriend">
                    <div className="friendprofile">
                        <img
                            src="/img/profile/user-default.svg"
                            className="pictureprofile bordern shape0"
                        />
                    </div>
                    <span className="friendname">{l("login.unknowuser")}</span>
                </div>
                <div className="input-box">
                    <label htmlFor="uidfriend">
                        <I icon={fa.faUserGroup} />
                        {l("login.uidyourfriend")}
                    </label>
                    <input
                        defaultValue=""
                        name="uidfriend"
                        id="uidfriend"
                        className="textbox uidfriend"
                        type="number"
                        placeholder={l("login.uidyourfriend")}
                    />
                </div>
                <button className="btn btn-next" defaultValue="5">
                    {l("login.register")}
                </button>
            </form>
            <button className="toggleIndex register-link">
                {l("login.login")}
            </button>
        </div>
    );
}
