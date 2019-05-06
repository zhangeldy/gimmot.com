// import { Api } from "../_helpers/service";
import { apiImitation } from "../utils/apiImitation";

export const RolesApi = {
  getRoles: () =>
    apiImitation(1000,
        [
          {
            userNames: "Нурбеков Жайык Жунсалиевич",
            login: "zh.nurbekov",
            password: "1112232А",
            email: "zh.nurbekov@gmail.com",
            role: "Админ",
            note: "разработчик",
            islocked: false
          },
          {
            userNames: "Ережеп Дастан Жунсалиевич",
            login: "dastan28",
            password: "125Ass23",
            email: "zhaiyk91@mail.com",
            role: "ADMIN",
            note: "инженер",
            islocked: true
          }

        ]
    ),


  updateRole: (user) =>
    apiImitation(1000, {
      user
    })


};
