import loginReducer, { loginModule } from '../pages/LoginPage/LoginDucks';
import sortObject from '../utils/sortObject';

export default sortObject({
  [loginModule]: loginReducer
});
