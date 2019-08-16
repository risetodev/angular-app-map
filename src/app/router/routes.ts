import { Routes } from "@angular/router";
import { AboutComponent } from "../components/about/about.component";
import { OnlyLoggedInUsersGuard } from "../services/guards/auth-guard.service";
import { MapComponent } from "../components/map/map.component";
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
  {
    path: "",
    pathMatch: "full",
    redirectTo: "map",
    canActivate: [OnlyLoggedInUsersGuard]
  },
  // {
  //   path: "login",
  //   component: LoginComponent,
  //   canActivate: [UsersGuard]
  // },
  {
    path: "login",
    pathMatch: "full",
    redirectTo: "map",
    canActivate: [OnlyLoggedInUsersGuard]
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    canActivate: [OnlyLoggedInUsersGuard]
  }
];
