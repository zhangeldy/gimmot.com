import React from "react";
import Toolbar from "../components/Toolbar/Toolbar";

export default function Content({ component: Component, routeProps, ...rest }) {
  return (
    <div>
      <Toolbar />
      <Component {...routeProps} />
    </div>
  );
}
