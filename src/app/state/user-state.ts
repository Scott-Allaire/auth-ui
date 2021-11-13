import { Page } from "../models/page.model";
import { User } from "../models/user.model";

export interface UserState {
  users?: Page<User>;
  selectedUser?: User;
}
