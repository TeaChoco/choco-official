import { useState } from "react";
import { useAuth } from "../../../context/auth";
import FormBox from "./components/formBox";
import InputBox from "./components/inputBox";

export default function email(props) {
    const [email, setEmail] = useState("@gmail.com");
    const { register, setRegister } = useAuth();

    return (
        <FormBox
            classFormBox="email"
            nextBtnText={["general", "next"]}
            onSubmit={async (event) => {
                const data = await props.submitForm(event, {
                    email,
                });
                if (data.status == 200) {
                    await setRegister({
                        form: {
                            email: data.data,
                        },
                        data: data.data,
                    });
                    props.setBoxsPage("OTP");
                    console.log("register: ", register);
                }
            }}
            {...props}>
            <InputBox
                name="email"
                icon="faEnvelope"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
        </FormBox>
    );
}
