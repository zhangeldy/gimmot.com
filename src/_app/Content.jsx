import React from "react";

export default function Content({ component: Component, routeProps, ...rest }) {
  return <Component {...routeProps} />;
}
