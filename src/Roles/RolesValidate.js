import * as yup from "yup";
import getText from "../utils/getText";


export const RolesValidate = yup.object().shape({
  name: yup.string().required(getText("Обязательное поле для заполнения")),
  permissions: yup.array().required(getText("Нужно выбрать права доступа"))
});

