import React from 'react';
import { withTranslation as WT } from 'react-i18next';

const withTranslation = Component => {
  class WithTranslation extends React.Component {
    render() {
      const { i18n, ...otherProps } = this.props;
      return <Component {...otherProps} lang={i18n.language} />;
    }
  }
  return WT()(WithTranslation)
};

export default withTranslation;
