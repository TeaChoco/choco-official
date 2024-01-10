import l from "./../../../../lang/lang";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import PictureProfile from "./../../../../components/pictureProfile/pictureProfile.jsx";

export default function base() {
    return (
        <>
            <div className="content profileContent" id="backgroundn">
                <div className="search">
                    <button
                        className="profileBtnBack btnsrcshowcase"
                        value="profile"
                        type="button">
                        <I icon={fa.faArrowLeft} />
                    </button>
                    <input
                        type="text"
                        name="profile"
                        placeholder={l("searchInput.searchNameUid")}
                        className="searchInput"
                        autoComplete="off"
                    />
                    <button type="submit" id="searchBtn">
                        <I icon={fa.faSearch} />
                    </button>
                    <div className="searchlist userlist"> </div>
                </div>
                <div className="formProfile">
                    <div className="showprofile">
                        <PictureProfile size="100%" />
                        <div className="round">
                            <I icon={fa.faPenToSquare} />
                        </div>
                    </div>
                    <ul className="profileName">
                        <li>
                            <p className="name">{l("login.unknowuser")}</p>
                            <p className="profileId">#0</p>
                            <div className="editname">
                                <input
                                    name="name"
                                    id="name"
                                    className="inputname"
                                    type="text"
                                    placeholder="Name"
                                    maxLength="30"
                                    defaultValue={l("login.unknowuser")}
                                    required
                                />
                                <button className="btnname">
                                    <I icon={fa.faFloppyDisk} />
                                </button>
                            </div>
                        </li>
                        <li className="profileFriend">
                            0 {l("profile.friend")}
                        </li>
                    </ul>
                    <div className="profileBtn">
                        <button value="edit" className="profileButton">
                            {l("general.edit")}
                        </button>
                    </div>
                </div>
            </div>
            <div className="content profileMain" id="post">
                <div className="content profileNav">
                    <button className="profileNavBtn post" value="post">
                        {l("profile.profilenav.post")}
                    </button>
                    <button className="profileNavBtn about" value="about">
                        {l("profile.profilenav.about")}
                    </button>
                    <button className="profileNavBtn friend" value="friend">
                        {l("profile.profilenav.friend")}
                    </button>
                </div>
                <div className="contentProfile post"></div>
                <div className="contentProfile about"></div>
                <div className="contentProfile friend">
                    <h2 className="textrequest">
                        {l("profile.requestfriend")}
                    </h2>
                    <div className="requestList userlist"></div>
                    <h2 className="textfriend">{l("profile.friend")}</h2>
                    <div className="friendList userlist"></div>
                </div>
            </div>
            <div className="showAccount">
                <div className="content">
                    <h2 className="title">{l("profile.account.management")}</h2>
                    <ul className="personInfo">
                        <li className="username">
                            <I icon={fa.faUser} />
                            <span className="prefix">
                                {l("login.username")}
                            </span>
                            <span className="showtext">
                                {l("general.empty")}
                            </span>
                            <button className="edit" value="username">
                                {l("profile.edit.personInfo.username")}
                            </button>
                        </li>
                        <li className="email">
                            <I icon={fa.faEnvelope} />
                            <span className="prefix">{l("login?.email")}</span>
                            <span className="showtext">
                                {l("general.empty")}
                            </span>
                            <button className="edit" value="email">
                                {l("profile.edit.personInfo.email")}
                            </button>
                        </li>
                        <li className="password">
                            <I icon={fa.faKey} />
                            <span className="prefix">
                                {l("login.password")}
                            </span>
                            <span className="showtext">
                                {l("general.empty")}
                            </span>
                            <button className="edit" value="password">
                                {l("profile.edit.personInfo.password")}
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <h2 className="title">{l("profile?.account?.related")}</h2>
                    <ul className="personInfo">
                        <li className="google">
                            <img
                                className="icon"
                                src="/img/btn_icon_google.svg"
                                alt=""
                            />
                            <span className="prefix">Google</span>
                            <span className="showtext">
                                {l("general.empty")}
                            </span>
                            <button className="edit" value="google">
                                {l("profile.edit.personInfo.google")}
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <button className="profileDelete edit" value="delete">
                        {l("profile.account.delete")}
                    </button>
                </div>
            </div>
        </>
    );
}
