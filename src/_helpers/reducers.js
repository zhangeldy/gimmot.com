import loginReducer, { loginModule } from '../pages/LoginPage/LoginDucks';
import sortReducers from '../utils/sortReducers';

export default sortReducers({
  [loginModule]: loginReducer
});
