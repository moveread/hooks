import React, { ReactNode } from "react";
export type Translations<Locale extends string> = Record<Locale, string>;
export type LocaleContext<Locale extends string = string> = {
    locale: Locale;
    setLocale(locale: Locale): void;
    translate<Fallback extends Locale>(translations: Partial<Translations<Locale>> & Translations<Fallback>, p: {
        fallback: Fallback;
    }): string;
    translate(translations: Translations<Locale>): string;
};
export type Props<Locale> = {
    defaultLocale: Locale;
    children?: ReactNode;
};
export declare function make<Locale extends string>(locale: Locale, ...locales: Locale[]): {
    LocaleProvider: ({ defaultLocale, children }: Props<Locale>) => React.JSX.Element;
    useLocale: () => LocaleContext<Locale>;
    translate: (translations: Record<Locale, string>) => Translations<Locale>;
};
