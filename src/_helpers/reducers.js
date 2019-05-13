import localeReducer, { localeModule } from "../LocaleProvider/LocaleDucks";
import loginReducer ,{ loginModule } from "../LoginPage/LoginDucks";
import authReducer ,{ authModule } from "../Auth/AuthDucks";
import sortReducers from "../utils/sortReducers";

export const rootReducer = sortReducers({
  [localeModule]: localeReducer,
  [loginModule]: loginReducer,
  [authModule]: authReducer,
});
