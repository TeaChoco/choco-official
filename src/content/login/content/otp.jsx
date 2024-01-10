import { useState } from "react";
import l from "./../../../lang/lang";
import { useAuth } from "../../../context/auth";
import FormBox from "./components/formBox";
import InputBox from "./components/inputBox";
import BtnCancel from "../../../context/function/btnCancel";

export default function otp(props) {
    const { register, setRegister } = useAuth();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    return (
        <FormBox
            classFormBox="otp"
            h2={"enterotp"}
            nextBtnText={["login", "examine"]}
            onSubmit={async (event) => {}}
            btnBack={true}
            {...props}>
            <p>{register.data.data.with.email}</p>
            <button className="sendagain">{l("login.sendagain")}</button>
            <div className="otpform">
                <div className="fields-input">
                    {props.inputOtp(otp, setOtp)}
                </div>
            </div>
        </FormBox>
    );
}
