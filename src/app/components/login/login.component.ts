import { Component, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { setAuthentication } from "../../utils/localStorage/localStorage";
import { Router } from "@angular/router";
import { MapComponent } from "../map/map.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  hidePassword = true;

  userValidation = new FormControl("", [
    Validators.required,
    Validators.pattern("user")
  ]);

  passwordValidation = new FormControl("", [
    Validators.required,
    Validators.pattern("u_se_r")
  ]);

  constructor(private router: Router) {}

  signIn = async () => {
    await setAuthentication({ login: "user", date: new Date() });
    await this.router.navigate(["/map"]);

  };
}
