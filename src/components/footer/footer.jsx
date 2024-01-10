import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function footer() {
    return (
        <>
            <div className="footer"></div>
            <footer>
                <ul className="linkContact">
                    <li>
                        <a
                            href="https://www.youtube.com/channel/UC2iSaYxOhjCeyh0jhMvdyzA"
                            target="_blank">
                            <I icon={fa.faYoutube} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/TeaMikChoco"
                            target="_blank">
                            <I icon={fa.faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.tiktok.com/@teachoco8"
                            target="_blank">
                            <I icon={fa.faTiktok} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/TeaChoco4" target="_blank">
                            <I icon={fa.faTwitter} />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}
