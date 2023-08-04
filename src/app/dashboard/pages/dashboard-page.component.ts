import { Component, OnInit, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { DashboardService } from '../services/dashboard.service';
import { AuthService } from '../../auth/services/auth.service';
import { HistoryUser } from '../interfaces/history-user.interface';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private modal = inject(ToastrService);
  private authService = inject(AuthService);

  public histories: HistoryUser[] = [];

  public displayedColumns: string[] = [
    'username',
    'isActive',
    'description',
    'date',
    'tried',
  ];

  ngOnInit(): void {
    this.getHistories();
  }

  getHistories() {
    this.dashboardService.getHistories().subscribe({
      next: (data) => (this.histories = data),
      error: (message) => {
        this.modal.error('Error', message);
        this.authService.logout();
      },
    });
  }
}
