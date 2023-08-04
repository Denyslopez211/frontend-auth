import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  messageError(err: HttpErrorResponse) {
    if (err.status === 0) {
      return throwError(
        () => 'The server is not available or cannot be accessed'
      );
    }
    if (err.status === 401) {
      return throwError(() => err.error.message);
    }
    if (err.error.message) {
      return throwError(() => err.error.message);
    }

    return throwError(() => err.message);
  }
}
