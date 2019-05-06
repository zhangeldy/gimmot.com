// import { Api } from "../_helpers/service";
import { apiImitation } from "../utils/apiImitation";

export const LoginApi = {
  login: (login, password) =>
    apiImitation(1000, {
      username: "Zhayik",
      token: "dfgdfgdfg"
    }),

  checkAuth: (user) =>
    apiImitation(1000, {
      username: "Zhayik",
      token: "dfgdfgdfg"
    })

};
