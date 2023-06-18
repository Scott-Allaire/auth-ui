import { AuthData } from "./auth-data.model";

export interface AuthStatus {
  code: number,
  message: string,
  data: AuthData
}
