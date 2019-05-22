import localeReducer, { localeModule } from "../components/LocaleProvider/LocaleDucks";
import loginReducer ,{ loginModule } from "../pages/LoginPage/LoginDucks";
import sortReducers from "../utils/sortReducers";

export const rootReducer = sortReducers({
  [localeModule]: localeReducer,
  [loginModule]: loginReducer,
});
