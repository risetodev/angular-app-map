import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { MapComponent } from "../components/map/map.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { AboutComponent } from "../components/about/about.component";

export const routes: Routes = [
  { path: "Map", component: MapComponent },
  { path: "About", component: AboutComponent },
  { path: "", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
