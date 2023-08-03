import { Component, OnInit, inject } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ResponseHistory } from '../interfaces';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  private dashboardService = inject(DashboardService);
  public histories: ResponseHistory[] = [];

  ngOnInit(): void {
    this.getHistories();
  }

  getHistories() {
    this.dashboardService.getHistories().subscribe((data) => {
      this.histories = data;
    });
  }
}
