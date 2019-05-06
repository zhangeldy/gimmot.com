import * as yup from 'yup';
import getText from "../utils/getText";



export const loginValidate = yup.object().shape({
  login: yup.string().required(getText("Обязательное поле для заполнения")),
  password: yup.string().required(getText("Обязательное поле для заполнения"))
});
