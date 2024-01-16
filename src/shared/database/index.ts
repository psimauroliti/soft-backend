import { User } from "@user/user.entity";
import { Log } from "@shared/log";

interface database {
  users: User[];
  logs: Log[];
}

export const database: database = {
  users: [
    {
      id: "usrC3JC2g5R842o5JwiF",
      created_at: "2023-11-27T16:44:20+0000",
      updated_at: "2023-11-27T16:44:20+0000",
      gender: "male",
      first_name: "stevie",
      last_name: "wonder",
      email: "stevie@wonder.com",
      profile_photo: "https://api.minimalavatars.com/avatar/stevie-wonder/svg",
      birthdate: "1950-05-13T16:44:20+0000",
    },
  ],
  logs: [],
};