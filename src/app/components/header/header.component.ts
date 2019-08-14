import { Component, OnInit } from "@angular/core";
import { routes } from "../../Router/app-routing.module";
import { deleteSession } from "../../utils/localStorage/localStorage";

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
