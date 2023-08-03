import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';

@NgModule({
  declarations: [DashboardLayoutComponent, DashboardPageComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
