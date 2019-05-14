import React from "react";
import { connect } from "react-redux";

import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";
import kk from "react-intl/locale-data/kk";
import en from "react-intl/locale-data/en";

import moment from "moment";
import "moment/locale/ru";
import "moment/locale/kk";

import { changeLocale, localeModule } from "./LocaleDucks";

addLocaleData([...ru, ...kk, ...en]);

class LocaleProvider extends React.Component {
  componentDidMount() {
    let lang = localStorage.getItem("lang");
    if (lang && lang !== this.props.locale) {
      this.props.changeLocale(lang);
      moment.locale(this.props.locale);
    }
  }

  render() {
    return (
      <IntlProvider {...this.props}>
          {this.props.children}
      </IntlProvider>
    );
  }
}

const mapStateProp = state => ({
  locale: state[localeModule].lang,
  messages: state[localeModule].messages
});

export default connect(mapStateProp, { changeLocale })(LocaleProvider);

