import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  private readonly errorService = inject(ErrorService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('t-dn');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*',
          Pragma: 'no-cache',
        },
      });
    } else {
      request = request.clone({
        setHeaders: {
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*',
          Pragma: 'no-cache',
        },
      });
    }
    return next
      .handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          this.errorService.messageError(err)
        )
      );
  }
}
