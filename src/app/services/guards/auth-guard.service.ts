import { getAuthentication } from "../../utils/localStorage/localStorage";
import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  canActivate() {
    return getAuthentication();
  }
}
