import { CanActivate } from "@angular/router";
import { UserService } from "./auth-guard.service";
import { Injectable } from "@angular/core";

export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
  }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate() {
    console.log("OnlyLoggedInUsersGuard");
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert("no permission");
      return false;
    }
  }
}
