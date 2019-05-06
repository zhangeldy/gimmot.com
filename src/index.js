import React from "react";
import ReactDOM from "react-dom";
import App from "./_app/App";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
