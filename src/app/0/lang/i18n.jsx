import i18n from "i18next";
import applangjson from "./lang.json";
import langjson from "./../../../lang/lang.json"; // ไฟล์ JSON ที่มีข้อมูลทุกภาษา
import { readLanguage } from "./../../../lang/i18n.jsx";

export default function appResources(appId) {
    const language = langjson.language;
    for (let i = 0; i < language.length; i++) {
        i18n.addResourceBundle(language[i], "translation", {
            app: {
                [appId]: readLanguage(applangjson, language[i]),
            },
        });
    }
}
