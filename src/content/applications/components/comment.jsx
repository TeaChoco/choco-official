import l from "./../../../lang/lang";
import PictureProfile from "./../../../components/pictureProfile/pictureProfile.jsx";

export default function comment({ info }) {
    return (
        <div className=" content comment">
            <form className="commentBox">
                <div className="input-box">
                    <div className="profileImg">
                        <PictureProfile size="100%" />
                    </div>
                    <p className="commentName">{l("login.unknowuser")}</p>
                    <input
                        className="commentText"
                        name="commentText"
                        type="text"
                        placeholder={l(
                            "application.infoApp.comment.commentText"
                        )}
                        autoComplete="off"
                    />
                </div>
                <button type="submit" className="sentcomment">
                    {l("application.infoApp.comment.sentcomment")}
                </button>
            </form>
            <div className="showcomment"></div>
        </div>
    );
}
