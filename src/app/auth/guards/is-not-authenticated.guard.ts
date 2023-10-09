import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  const router= inject( Router );
  if (sessionStorage.getItem('token')) {
    router.navigateByUrl('/dashboard');
    return false;
  }
  return true;
};
