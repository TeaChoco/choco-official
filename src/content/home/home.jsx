import "./css/home.css";
import l from "./../../lang/lang.jsx";
import icon from "./../../public/img/icon.png";

export default function home() {
    return (
        <main className="srccontent home">
            <div className="bordermax">
                <div className="contenttitle">
                    <img
                        src={icon}
                        alt="icon web"
                        className="imgchocowebicon"
                    />
                    <p className="textwelcome">{l("home.welcome")}</p>
                </div>
                <div className="section"></div>
                <div className="section features"></div>
            </div>
        </main>
    );
}
