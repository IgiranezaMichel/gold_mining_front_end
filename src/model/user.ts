import { USER_STATUS } from "../constants/enums/userStatus";

export interface User {
  id: string;
  name: string;
  gender:string;
  email: string;
  phoneNumber:string;
  role: string;
  password: string;
  status: USER_STATUS;
  base64Image: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
