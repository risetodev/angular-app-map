import { Routes } from "@angular/router";
import { AboutComponent } from "../components/about/about.component";
import { OnlyLoggedInUsersGuard } from "../services/guards/auth-guard.service";
import { MapComponent } from "../components/map/map.component";
import { LoginComponent } from "../components/login/login.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: "about",
    component: AboutComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: "map",
    component: MapComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  },
  { path: "", component: LoginComponent },
  {
    path: "**",
    component: PageNotFoundComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  }
];
