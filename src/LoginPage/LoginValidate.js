import * as yup from 'yup';
import getText from "../utils/getText";



export const loginValidate = yup.object().shape({
  login: yup.string().required(getText("fffffffffff")),
  password: yup.string().required(getText("fffffffffff"))
});
