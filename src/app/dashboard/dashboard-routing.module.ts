import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { PrivateGuard } from '../auth/guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [PrivateGuard],
    component: DashboardLayoutComponent,
    children: [
      { path: 'histories', component: DashboardPageComponent },
      { path: '**', redirectTo: 'histories' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
