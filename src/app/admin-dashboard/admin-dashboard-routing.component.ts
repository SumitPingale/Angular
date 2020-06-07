import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { SignUpComponent } from "../sign-up/sign-up.component";

const adminDashboardRoutes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
    children: [
      {
        path: "",
        component: SignUpComponent,
      },
    ],
  },
];

export const adminDashboardRouting: ModuleWithProviders = RouterModule.forChild(
  adminDashboardRoutes
);
