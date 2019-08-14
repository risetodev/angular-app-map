import { getAuthentication } from "../utils/localStorage/localStorage";

export class UserService {
  isLoggedIn(): boolean {
    return getAuthentication("user");
  }
}
