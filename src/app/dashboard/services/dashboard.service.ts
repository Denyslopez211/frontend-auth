import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoryUser } from '../interfaces/history-user.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() {}

  getHistories(): Observable<HistoryUser[]> {
    const url = `${this.baseUrl}/auth-history`;

    return this.http.get<HistoryUser[]>(url);
  }
}
