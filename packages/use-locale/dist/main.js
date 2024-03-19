import React, { createContext, useContext, useState } from "react";
export function make(locale, ...locales) {
    const LocaleCtx = createContext({ locale, setLocale() { }, translate: () => '' });
    const useLocale = () => useContext(LocaleCtx);
    function translate(translations) {
        return translations;
    }
    function LocaleProvider({ defaultLocale, children }) {
        const [locale, setLocale] = useState(defaultLocale);
        const t = (t, cfg) => { var _a; return (_a = t[locale]) !== null && _a !== void 0 ? _a : t[cfg === null || cfg === void 0 ? void 0 : cfg.fallback]; };
        return (React.createElement(LocaleCtx.Provider, { value: { locale, setLocale, translate: t } }, children));
    }
    return {
        LocaleProvider,
        useLocale,
        translate
    };
}
