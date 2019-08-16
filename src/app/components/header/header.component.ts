import { Component } from "@angular/core";

import { deleteSession } from "../../utils/localStorage/localStorage";
import { routes } from "src/app/router/routes";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  routes = routes;
  constructor(private router: Router) {}
  removeSession = async () => {
    await deleteSession();
    await this.router.navigate(["login"]);
  };
  getCurrentPage = (currentPage: string) => {
    return window.location.href.endsWith(currentPage);
  };
}
