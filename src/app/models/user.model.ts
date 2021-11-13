import { Page } from "./page.model";

export interface User {
  id: number,
  username: string,
  updatedAt?: Date,
  createdAt?: Date
}
