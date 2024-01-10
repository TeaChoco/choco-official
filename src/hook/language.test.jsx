import languageJson from "./language.test.json";

const readLanguage = (data, lang) => {
    const l = [];
    for (const key in data) {
        const value = data[key];
        if (value[lang]) {
            l[key] = value[lang];
        } else {
            if (typeof value === "object") {
                l[key] = readLanguage(value, lang);
            } else {
                l[key] = value;
            }
        }
    }
    return l;
};

function getLanguage() {
    let lang = localStorage.getItem("setting lang");
    if (lang === null) {
        lang = "en";
        localStorage.setItem("setting lang", lang);
    }

    return readLanguage(languageJson, lang);
}

export default getLanguage();
