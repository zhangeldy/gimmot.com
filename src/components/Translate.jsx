import React from "react";
import { FormattedHTMLMessage } from "react-intl";

export default function Translate({ id, ...rest }) {
  return <FormattedHTMLMessage id={id} {...rest} />;
}
