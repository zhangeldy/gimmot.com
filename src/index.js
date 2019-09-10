import React from "react";
import ReactDOM from "react-dom";
import App from "./_app/App";
import * as serviceWorker from './serviceWorker';
import './_css/style.scss';
import './_css/basscss.min.css';
import 'react-notifications/lib/notifications.css';

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
