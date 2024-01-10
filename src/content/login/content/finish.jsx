import l from "./../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function finish() {
    return (
        <div className="form-box finish">
            <button className="btnbackregister" defaultValue="0">
                <I icon={fa.faLeftLong} />
            </button>
            <h2>{l("login.completedregistration")}</h2>
            <button className="btn btn-next" defaultValue="6">
                {l("login.loginnow")}
            </button>
            <button className="toggleIndex register-link">
                {l("login.login")}
            </button>
        </div>
    );
}
