import { Component, Input, OnInit } from "@angular/core";

import { deleteSession } from "../../utils/localStorage/localStorage";
import { routes } from "src/app/Router/routes";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  routes = routes;
  removeSession = deleteSession;
  getCurrentPage = (currentPage: string) => {
    return window.location.href.endsWith(currentPage);
  };
}
