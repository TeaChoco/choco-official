import React from "react";
import { useTranslation } from "react-i18next";
import { GOOGLE_CLIENT_ID as clientId } from "../../../../hook/Secrets.json";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useAuth } from "../../../../context/auth";
import submitForm from "../submitform";
import BtnCancel from "../../../../context/function/btnCancel";

const GoogleAuth = () => {
    const { t } = useTranslation();

    const { user, setUser, register, setRegister } = useAuth();
    const btnCancel = BtnCancel();

    // const initClient = () => {
    //     gapi.client.init({
    //         clientId,
    //         scope: "",
    //     });
    // };
    // gapi.load("client:auth2", initClient);

    const onSuccess = async (res) => {
        if (!user) {
            const data = await submitForm(
                { content: "google_login" },
                res.profileObj
            );
            if (data.status == 302) {
                console.log("login with google");
                setUser(data.data);
                btnCancel();
            } else if (data.status == 200) {
                //*new user
                console.log("new user from google");
                setRegister({
                    form: {
                        google: data.data,
                    },
                    data: data.data,
                });
            }
        }
        console.log("success", res);
        return null;
    };

    const onFailure = (res) => {
        console.log("failed", res);
    };

    return (
        <GoogleLogin
            clientId={clientId}
            buttonText={t("login.signingoogle", { defaultValue: t("error") })}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            className="sign-in-with-google"
        />
    );
};

export default GoogleAuth;
