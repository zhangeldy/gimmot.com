import localeReducer, { localeModule } from "../LocaleProvider/LocaleDucks";
import loginReducer ,{ loginModule } from "../LoginPage/LoginDucks";
import usersReducer, { usersModul } from "../Users/UsersDucks";
import rolesReducer, { rolesModule } from "../Roles/RolesDucks";
import sortReducers from "../utils/sortReducers";

export const rootReducer = sortReducers({
  [localeModule]: localeReducer,
  [loginModule]: loginReducer,
  [usersModul]: usersReducer,
  [rolesModule]: rolesReducer
});
