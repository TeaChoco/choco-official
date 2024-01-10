import { useState } from "react";
import l from "./../../../lang/lang";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
// import { AuthContext } from "../../../context/auth";
import FormBox from "./components/formBox";
import InputBox from "./components/inputBox";
import BtnCancel from "../../../context/function/btnCancel";

export default function login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [warnPassword, setWarnPassword] = useState(false);
    // const { user, setUser } = useContext(AuthContext);
    const btnCancel = BtnCancel();

    return (
        <FormBox
            classFormBox="login"
            onSubmit={async (event) => {
                const data = await props.submitForm(event, {
                    username,
                    password,
                });
                if (data.status == 200) {
                    // setUser(data.data );
                    btnCancel();
                }
            }}
            {...props}>
            <InputBox
                name="username"
                icon="faUser"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <InputBox
                class={`password${warnPassword ? " active red" : ""}`}
                name="password"
                icon="faKey"
                value={password}
                type={showPassword ? "text" : "password"}
                onChange={(event) => {
                    setPassword(event.target.value);
                    setWarnPassword(
                        event.target.value != "" &&
                            event.target.value.length < 8
                    );
                }}>
                <div
                    className="btnshowpassword"
                    onClick={() => {
                        setShowPassword(!showPassword);
                    }}>
                    <I icon={showPassword ? fa.faEyeSlash : fa.faEye} />
                </div>
                <span className="warninput password">
                    {l("login.warninput.password")}
                </span>
            </InputBox>
        </FormBox>
    );
}
