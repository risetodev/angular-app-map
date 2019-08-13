import { Component, OnInit } from "@angular/core";
import { routes } from "../../Router/app-routing.module";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  routes = routes;

  getCurrentPage = (currentPage: string) => {
    return window.location.href.endsWith(currentPage);
  };
  constructor() {}

  ngOnInit() {}
}
