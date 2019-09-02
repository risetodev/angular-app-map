import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./router/app-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./utils/materialUI/materialUI.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MapComponent } from "./components/map/map.component";
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HeaderComponent } from "./components/header/header.component";
import { OnlyLoggedInUsersGuard } from "./services/guards/auth-guard.service";
import { AgmCoreModule } from "@agm/core";
import { HttpClientModule } from "@angular/common/http";
import { LayoutComponent } from "./components/layout/layout.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAsc_BpmdANMQiWNr6z3KGFp3j3ZBKyHv0"
    }),
    HttpClientModule
  ],
  providers: [OnlyLoggedInUsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
