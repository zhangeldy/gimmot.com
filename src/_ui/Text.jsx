import React from "react";
import PropTypes from "prop-types";
import { FormattedHTMLMessage } from "react-intl";

export default function Text(props) {
  return <FormattedHTMLMessage {...props} />;
}

Text.propTypes = {
  id: PropTypes.string.isRequired
};
