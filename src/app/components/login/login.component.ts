import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { setAuthentication } from "../../utils/localStorage/localStorage";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  private hidePassword = true;

  private userValidation = new FormControl("", [
    Validators.required,
    Validators.pattern("user")
  ]);

  private passwordValidation = new FormControl("", [
    Validators.required,
    Validators.pattern("u_se_r")
  ]);

  constructor(private router: Router) {}

  private signIn = (): void => {
    setAuthentication({ login: "user", date: new Date() });
    this.router.navigate(["/map"]).then(error => console.log(error));
  };
}
