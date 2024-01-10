import React from "react";
import l from "./../../../../lang/lang.jsx";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function custom() {
    return (
        <>
            <div
                className={
                    `editprofile` /*<?php if (isset($_GET['edit'])) { ?>active<?php } ?>*/
                }
                id="pageprofile">
                <div className="naveditprofile">
                    <button className="page pageprofile" value="profile">
                        {l("profile.naveditprofile?.pageprofile")}
                    </button>
                    <button className="page pageborder" value="border">
                        {l("profile.naveditprofile?.pageborder")}
                    </button>
                    <button className="page pageshape" value="shape">
                        {l("profile.naveditprofile?.pageshape")}
                    </button>
                    <button className="page pagebackground" value="background">
                        {l("profile.naveditprofile?.pagebackground")}
                    </button>
                </div>

                <div className="addprofile">
                    <input
                        name="profile"
                        className="uploadProfile"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                    />
                    <I icon={fa.faPenToSquare} />
                </div>

                <div className="formchoose">
                    <div className="chooseprofile"></div>
                    <div className="chooseborder"></div>
                    <div className="chooseshape"></div>
                    <div className="choosebackground"></div>

                    <div className="canceleditprofile">
                        {l("general.cancel")}
                    </div>
                    <div className="saveeditprofile">{l("general.save")}</div>
                </div>
            </div>
            <div
                className={
                    "backeditprofile" /*<?php if (isset($_GET['edit'])) { ?>active<?php } ?>*/
                }></div>
        </>
    );
}
