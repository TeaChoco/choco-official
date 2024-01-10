import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import l from "../../../lang/lang";
import { Link } from "react-router-dom";
import PictureProfile from "./../../../components/pictureProfile/pictureProfile.jsx";

export default function header() {
    return (
        <header id="header">
            <Link to="/chat" className="btnBackMessage">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h1 id="heading">
                <div className="profileImg">
                    <PictureProfile size="100%" />
                </div>
                {l("login.unknowuser")}
                <p className="profileId">#0</p>
            </h1>
        </header>
    );
}
