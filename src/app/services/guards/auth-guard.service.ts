import { getAuthentication } from "../../utils/localStorage/localStorage";
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (!getAuthentication()) {
      this.router.navigate([""]).then(r => null);
    }

    return getAuthentication();
  }
}
