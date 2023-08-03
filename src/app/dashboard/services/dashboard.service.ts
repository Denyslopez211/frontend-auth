import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ResponseHistory } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  constructor() {}

  getHistories(): Observable<ResponseHistory[]> {
    const url = `${this.baseUrl}/auth-history`;

    return this.http.get<ResponseHistory[]>(url);
  }
}
