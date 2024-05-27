import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authToken = localStorage.getItem('token');

  if (authToken) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    return next(authReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          console.log('Token expirado o inválido');
          localStorage.removeItem('token');
          authService.logOut();
        }
        return throwError(() => new Error(error));
      })
    );
  }

  return next(req);
};
