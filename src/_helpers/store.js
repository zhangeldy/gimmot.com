import { configureStore } from "redux-starter-kit";
import { rootReducer } from "./reducers";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const store = configureStore({ reducer: rootReducer });

export { store, history };
