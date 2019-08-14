import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { setAuthentication } from "../../utils/localStorage/localStorage";

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

  signIn = setAuthentication;
}
