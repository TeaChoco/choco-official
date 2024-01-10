import "./pictureProfile.css";
import axios from "axios";
import userDefault from "./../../public/img/profile/user-default.svg";

export default function pictureProfile({ uid, size = "40px" }) {
    let picture;
    if (uid == null) {
        picture = { src: userDefault, className: "pictureprofile profilen bordern shape0" };
    } else {
        picture = { src: userDefault, className: "pictureprofile profilen bordern shape0" };
    }

    return (
        <div className="divProfile">
            <img
                src={picture.src}
                className={picture.className}
                style={{ width: size, height: size }}
            />
        </div>
    );
}
