import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

const getBrowserLocale = () => {
    const language = navigator.language || navigator.languages[0];
    return language.toLowerCase();
};

const determineMessages = (locale) => {
    if (locale.startsWith('es')) {
        return { locale: 'es-ES', messages: localeEsMessages };
    } else {
        return { locale: 'en-US', messages: localeEnMessages };
    }
};

const { locale, messages } = determineMessages(getBrowserLocale());

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
        <JobsList />
    </IntlProvider>, 
    document.getElementById("root")
);
