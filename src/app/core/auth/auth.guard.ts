import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);

  const token = localStorage.getItem('auth_token');

  if (token) {
    return true; // allow route
  }

  // no token → redirect to login
  router.navigate(['/login']);
  return false;
};

export const loginGuard = () => {
    const router = inject(Router);
    const token = localStorage.getItem('auth_token');

    if(token)
    {
        router.navigate(['/task']);
        return false;
    }

    return true;
}
