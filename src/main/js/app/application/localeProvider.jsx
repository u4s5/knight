import React from 'react';
import {connect} from "react-redux";
import ru from 'react-intl/locale-data/ru';
import en from 'react-intl/locale-data/en';
import {addLocaleData, IntlProvider} from 'react-intl'
import messageRu from 'app/i18n/messages-ru';
import messageEn from 'app/i18n/messages-en';

function intlLocaleProviderComponent(props) {
    const {locale, children} = props;
    const message = {ru: messageRu, en: messageEn,};
    addLocaleData([...ru, ...en]);
    return (
        <IntlProvider
            key={locale}
            locale={locale}
            messages={message[locale]}>
            {children}
        </IntlProvider>
    );
}

const mapStateToProps = state => ({
    locale: state.intl.locale
});

export default connect(mapStateToProps)(intlLocaleProviderComponent);
