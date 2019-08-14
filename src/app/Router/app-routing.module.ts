import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { MapComponent } from "../components/map/map.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { AboutComponent } from "../components/about/about.component";
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from "../guards/guards";

export const routes: Routes = [
  {
    path: "About",
    component: AboutComponent,
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard]
  },
  {
    path: "Map",
    component: MapComponent,
    canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard]
  },
  { path: "", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
