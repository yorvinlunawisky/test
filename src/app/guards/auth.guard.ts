import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/users/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isUserLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
