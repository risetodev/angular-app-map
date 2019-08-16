import { getAuthentication } from "../../utils/localStorage/localStorage";
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate() {
    if (!getAuthentication()) {
      //this.router.navigate(["login"]).then(r => null);
      return false;
    }
    return true;
  }
}

@Injectable()
export class UsersGuard implements CanActivate {
  canActivate() {
    return !getAuthentication();
  }
}
