import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HttpClientModule } from "@angular/common/http";
import { AdminDashboardModule } from "src/app/admin-dashboard/admin-dashboard.module";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, LoginComponent, SignUpComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
