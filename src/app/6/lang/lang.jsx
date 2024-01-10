import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function lang(text) {
    const { t } = useTranslation();
    const { appId } = useParams();

    return t(`app.${appId}.` + text, { defaultValue: t("error") });
}
