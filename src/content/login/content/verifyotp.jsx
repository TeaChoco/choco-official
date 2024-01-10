import l from "./../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function verifyotp({ inputOtp }) {
    return (
        <div className="form-box verifyotp">
            <button className="btnbackregister" defaultValue="3">
                <I icon={fa.faLeftLong} />
            </button>
            <h2>{l("login.enterotp")}</h2>
            <p>@gmail.com</p>
            <button className="sendagain">{l("login.sendagain")}</button>
            <div className="otpform">
                <div className="fields-input">{inputOtp()}</div>
                <button className="btn btn-next" defaultValue="8">
                    {l("login.examine")}
                </button>
            </div>
        </div>
    );
}
