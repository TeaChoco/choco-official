import l from "./../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function verify({ google_button }) {
    return (
        <div className="form-box verify">
            <h2>{l("login?.verifidentity")}</h2>
            <form className="registerform">
                <div className="input-box email">
                    <label htmlFor="email">
                        <I icon={fa.faEnvelope} />
                        {l("login?.email")}
                    </label>
                    <input
                        name="email"
                        id="email"
                        className="textbox"
                        type="text"
                        placeholder={l("login?.email")}
                        defaultValue="@gmail.com"
                    />
                </div>
                <button className="btn btn-next" defaultValue="7">
                    {l("general?.next")}
                </button>
            </form>
            <span className="lineor">
                <span>{l("general?.or")}</span>
            </span>
            {google_button}
        </div>
    );
}
