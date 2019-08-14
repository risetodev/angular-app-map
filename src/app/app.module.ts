import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./Router/app-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./utils/materialUI/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapComponent } from "./components/map/map.component";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HeaderComponent } from "./components/header/header.component";
import { AlwaysAuthGuard, OnlyLoggedInUsersGuard } from "./guards/guards";
import { UserService } from "./guards/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AlwaysAuthGuard, UserService, OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
