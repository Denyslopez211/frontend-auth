import { Component, OnInit, inject } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ResponseHistory } from '../interfaces';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  // private modal = inject(ToastrService);
  private router = inject(Router);
  private authService = inject(AuthService);

  public histories: ResponseHistory[] = [];

  ngOnInit(): void {
    this.getHistories();
  }

  getHistories() {
    this.dashboardService.getHistories().subscribe({
      next: (data) => (this.histories = data),
      error: (message) => {
        // this.modal.error('Error', message);
        this.authService.logout();
      },
    });
  }
}
