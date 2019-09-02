import { Component, Input } from "@angular/core";
import { deleteSession } from "../../utils/localStorage/localStorage";
import { routes } from "src/app/router/routes";
import { Router, Routes } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Input() userName: string;

  private routes: Routes = routes;

  constructor(private router: Router) {}

  private removeSession = (): void => {
    deleteSession();
    this.router.navigate(["login"]).then(error => console.log(error));
  };

  private getCurrentPage = (currentPage: string): boolean => {
    return window.location.href.endsWith(currentPage);
  };
}
