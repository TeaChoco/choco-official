import "./css/message.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import l from "./../../lang/lang";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header";

const socket = io.connect(
    "https://chocobeta-server-realtime-socketio.teachoco.repl.co/"
);

export default function message() {
    const [message, setMessage] = useState("");

    const inputMessage = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        console.log(message);
        socket.emit("send", { message });
    };

    useEffect(() => {
        socket.on("recieve", (data) => {
            alert(data.message);
        });
    }, [socket]);

    return (
        <main className="srccontent message">
            <div className="bordermax">
                <Header />
                <div className="content">
                    <div className="messageContent"></div>
                    <div className="typing-area">
                        <div className="listmessage"></div>
                        <input
                            type="text"
                            className="input-field"
                            placeholder={l("chat.message.input-field")}
                            autoComplete="off"
                            onChange={inputMessage}
                        />
                        <button className="active" onClick={sendMessage}>
                            <I icon={fa.faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
