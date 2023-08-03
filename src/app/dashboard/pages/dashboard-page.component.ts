import { Component, OnInit, inject } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ResponseHistory } from '../interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  private modal = inject(ToastrService);
  public histories: ResponseHistory[] = [];

  ngOnInit(): void {
    this.getHistories();
  }

  getHistories() {
    this.dashboardService.getHistories().subscribe({
      next: (data) => (this.histories = data),
      error: (message) => {
        this.modal.error('Error', message);
      },
    });
  }
}
