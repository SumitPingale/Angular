import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { adminDashboardRouting } from "./admin-dashboard-routing.component";

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [CommonModule, adminDashboardRouting],
})
export class AdminDashboardModule {}
