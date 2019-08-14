import { Component } from "@angular/core";
import { getAuthentication } from "./utils/localStorage/localStorage";
import { UserService } from "./guards/auth-guard.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private userService: UserService) {}

  isLogged = this.userService.isLoggedIn();
}
