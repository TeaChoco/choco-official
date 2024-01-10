import { useTranslation } from "react-i18next";

export default function lang(text) {
    const { t } = useTranslation();

    return t(text, { defaultValue: t("error") });
}
