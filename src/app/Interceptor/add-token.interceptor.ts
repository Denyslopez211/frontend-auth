import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  private router = inject(Router);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('dys-c');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        this.router.navigateByUrl('/login');
        if (err.status === 0) {
          return throwError(
            () => 'The server is not available or cannot be accessed'
          );
        }

        if (err.status === 401) {
          return throwError(() => 'Error loading attempt histories');
        }
        if (err.error.message) {
          return throwError(() => err.error.message);
        }

        return throwError(() => err.message);
      })
    );
  }
}
