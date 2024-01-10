import "./css/login.css";
import { useState } from "react";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import GoogleButton from "./config/lib/google";
import BtnCancel from "../../context/function/btnCancel";
import submitForm from "./config/submitform";
import Helper from "./content/helper/helper";
import BoxLogin from "./content/login";
import BoxEmail from "./content/email";
import BoxOtp from "./content/otp";
import BoxRegister from "./content/register";
import BoxProfile from "./content/profile";
import BoxFriend from "./content/friend";
import BoxFinish from "./content/finish";
import BoxVerify from "./content/verify";
import BoxVerifyOtp from "./content/verifyotp";
import BoxEdit from "./content/edit";

function login() {
    const [openHelper, setOpenHelper] = useState(false);
    const [boxsPage, setBoxsPage] = useState("EMAIL");
    const [boxRegister, setBoxRegister] = useState(false);

    const funOpenHelper = (event) => {
        if (event?.target?.className == "backhelper" || event == true) {
            setOpenHelper(!openHelper);
        }
    };

    const switchBoxspage = () => {
        setBoxRegister(!boxRegister);
    };

    const inputOtp = (value, setValue) => {
        const inputs = [];
        for (let i = 1; i < 7; i++) {
            inputs.push(
                <input
                    key={`otp${i}`}
                    value={value[i - 1]}
                    type="number"
                    name={`otp${i}`}
                    className={`otp otp${i}`}
                    placeholder="0"
                    min="0"
                    max="9"
                    maxLength="1"
                    tabIndex={i}
                    onChange={(event) => {
                        const newOtp = value;
                        newOtp[i - 1] = event.nativeEvent.data;
                        console.log(newOtp);
                        setValue(newOtp);
                    }}
                />
            );
        }
        return inputs;
    };

    const showBoxsPage = () => {
        const commonProps = {
            switchBoxspage,
            setBoxsPage,
            submitForm,
            GoogleButton,
        };
        if (!boxRegister) {
            return <BoxLogin {...commonProps} />;
        } else {
            switch (boxsPage) {
                case "EMAIL":
                    return <BoxEmail {...commonProps} />;
                case "OTP":
                    return <BoxOtp {...commonProps} inputOtp={inputOtp} />;
                case "REGISTER":
                    return <BoxRegister {...commonProps} />;
                case "PROFILE":
                    return <BoxProfile {...commonProps} />;
                case "FRIEND":
                    return <BoxFriend {...commonProps} />;
                case "FINISH":
                    return <BoxFinish {...commonProps} />;
                case "VERIFY":
                    return <BoxVerify {...commonProps} />;
                case "VERIFYOTP":
                    return (
                        <BoxVerifyOtp {...commonProps} inputOtp={inputOtp} />
                    );
                case "EDIT":
                    return <BoxEdit {...commonProps} />;
                default:
                    return <BoxLogin {...commonProps} />;
            }
        }
    };
    return (
        <div className="srccontent login">
            {openHelper ? <Helper funOpenHelper={funOpenHelper} /> : ""}
            <div className="wrapper">
                <button className="btn-cancel" onClick={BtnCancel()}>
                    <I icon={fa.faX} />
                </button>
                <div className="btn-help" onClick={() => funOpenHelper(true)}>
                    <I icon={fa.faQuestion} />
                </div>
                <div className="boxs">{showBoxsPage()}</div>
            </div>
        </div>
    );
}

export default login;
