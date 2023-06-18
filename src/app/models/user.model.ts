import { Page } from "./page.model";

export interface User {
  id: number,
  email: string,
  name: string
  updatedAt?: Date,
  createdAt?: Date
}
