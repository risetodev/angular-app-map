import { Component } from "@angular/core";
import { getAuthentication } from "./utils/localStorage/localStorage";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showHeader() {
    return getAuthentication();
  }
}
