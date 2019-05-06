import React from "react";
import { connect } from "react-redux";

import { IntlProvider, addLocaleData } from "react-intl";
import ru from "react-intl/locale-data/ru";
import kk from "react-intl/locale-data/kk";
import en from "react-intl/locale-data/en";

import moment from "moment";
import "moment/locale/ru";
import "moment/locale/kk";

import { LocaleProvider as AntdLocaleProvider } from "antd";
import ru_RU from "antd/lib/locale-provider/ru_RU";
import en_US from "antd/lib/locale-provider/en_US";
import kk_KK from "./kk_KK";
import { changeLocale, localeModule } from "./LocaleDucks";

addLocaleData([...ru, ...kk, ...en]);

class LocaleProvider extends React.Component {
  componentDidMount() {
    let lang = localStorage.getItem("lang");
    if (lang && lang !== this.props.locale) {
      this.props.changeLocale(lang);
    }
  }

  getLocale = () => {
    moment.locale(this.props.locale);
    switch (this.props.locale) {
      case "kk":
        return kk_KK;
      case "ru":
        return ru_RU;
      case "en":
        return en_US;
      default:
        return ru_RU;
    }
  };

  render() {
    return (
      <IntlProvider {...this.props}>
        <AntdLocaleProvider locale={this.getLocale()}>
          {this.props.children}
        </AntdLocaleProvider>
      </IntlProvider>
    );
  }
}

const mapStateProp = state => ({
  locale: state[localeModule].lang,
  messages: state[localeModule].messages
});

export default connect(mapStateProp, { changeLocale })(LocaleProvider);


/*

function connect(callbackStates, actions) {
  let state = {};
  let reducers = {
    router: function(state, action) {

    },
    locale: function(state, action) {

    }
  };

  let readReducers = (action) => {
    Object.keys(reducers).forEach(key => {
      state[key] = reducers[key](state, action)
    });
  };
  let stateProps = callbackStates(state);
  let newAction = {};

  Object.keys(actions).forEach(key => {
    newAction[key] = () => {
      let action = actions[key]();
      let tempState = readReducers(action);
      if (tempState) {
        state[key] = tempState;
      }
    }
  });

  return function(Component) {
    <Component {...stateProps} {...newAction} />
  }
}
*/


