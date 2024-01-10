import l from "./../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export default function profile({ register }) {
    return (
        <div className="form-box profile">
            {!register?.with?.google ? (
                <button className="btnbackregister" defaultValue="2">
                    <I icon={fa.faLeftLong} />
                </button>
            ) : (
                ""
            )}
            <h2>{l('menu.Profile')}</h2>
            <form className="registerform">
                <img
                    className="imgprofile"
                    src="/img/profile/user-default.svg"
                />
                <div className="input-box">
                    <label htmlFor="profile">
                        <I icon={fa.faImage} />
                        {l('login.profile')}
                    </label>
                    <input
                        defaultValue=""
                        name="profile"
                        id="profile"
                        className="inputFile"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        style={{
                            content:
                                l('profile.edit.searchprofile'),
                        }}
                    />
                </div>
                <button className="btn btn-next" defaultValue="4">
                    {l('general.next')}
                </button>
            </form>
            <button className="toggleIndex register-link">
                {l('login.login')}
            </button>
        </div>
    );
}
