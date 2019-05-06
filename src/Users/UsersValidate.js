import * as yup from "yup";
import getText from "../utils/getText";


export const UsersValidate = yup.object().shape({
  name: yup.string().required(getText("Обязательное поле для заполнения")),
  login: yup.string().required(getText("Обязательное поле для заполнения")),
  password: yup.string().required(getText("Обязательное поле для заполнения")),
  email: yup.string().required(getText("Обязательное поле для заполнения")),
  role: yup.string().required(getText("Обязательное поле для заполнения"))
});

