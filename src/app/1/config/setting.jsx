function settingapp(data = null) {
    let settingapp = JSON.parse(localStorage.getItem("app1 settingapp"));
    if (settingapp === null) {
        settingapp = {
            setting: {
                lang: "en",
                volume: 10,
            },
            test: {
                mode: 0,
                time: 5,
                level: 3,
                type: 0,
                unvoiced: 1,
                voiced: 0,
                bendsound: 0,
            },
        };
        localStorage.setItem("app1 settingapp", JSON.stringify(settingapp));
    }
    if (data) {
        localStorage.setItem("app1 settingapp", JSON.stringify(data));
    }
    return settingapp;
}

export default settingapp;
