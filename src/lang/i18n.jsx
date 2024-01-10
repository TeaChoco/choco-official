import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langjson from "./lang.json"; // ไฟล์ JSON ที่มีข้อมูลทุกภาษา

export const readLanguage = (data, lang) => {
    const l = [];
    for (const key in data) {
        const value = data[key];
        if (value?.en && !value[lang]) {
            l[key] = langjson.error[lang] ?? langjson.error.en;
        } else {
            if (value?.[lang]) {
                l[key] = value[lang];
            } else {
                if (typeof value === "object") {
                    l[key] = readLanguage(value, lang);
                } else {
                    l[key] = value;
                }
            }
        }
    }
    return l;
};

const resources = {};
const languages = langjson.language;

for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    resources[lang] = {
        translation: readLanguage(langjson, lang),
    };
}

i18n.use(initReactI18next).init({
    resources: resources,
    lng: localStorage.getItem("setting lang"),
    fallbackLng: localStorage.getItem("setting lang"),
    interpolation: {
        escapeValue: false,
    },
});

console.log(resources);
