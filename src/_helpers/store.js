import { configureStore } from "redux-starter-kit";
import { rootReducer } from "./reducers";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
export const store = configureStore({ reducer: rootReducer });
