import React from "react";
import { connect } from "react-redux";

import { IntlProvider } from "react-intl";

import moment from "moment";
import "moment/locale/ru";
import "moment/locale/kk";

import { changeLocale, localeModule } from "./LocaleDucks";

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

