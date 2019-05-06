import React from "react";
import { injectIntl } from "react-intl";

const withLocalization = Component => {
  class WithLocalization extends React.Component {
    render() {
      const { intl, ...otherProps } = this.props;
      return (
        <Component
          {...otherProps}
          lang={intl.locale}
          text={param => {
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

  return injectIntl(WithLocalization);
};

export default withLocalization;
