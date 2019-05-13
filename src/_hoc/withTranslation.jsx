import React from "react";
import { injectIntl } from "react-intl";

const withTranslation = Component => {
  class WithTranslation extends React.Component {
    render() {
      const { intl, ...otherProps } = this.props;
      return (
        <Component
          {...otherProps}
          lang={intl.locale}
          t={param => {
            if (param instanceof Object) {
              return intl.formatHTMLMessage(param);
            } else {
              return intl.formatHTMLMessage({ id: param });
            }
          }}
        />
      );
    }
  }

  return injectIntl(WithTranslation);
};

export default withTranslation;
