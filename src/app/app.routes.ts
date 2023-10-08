import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    //canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.routes').then( m => m.routes )
  },
  {
    path: 'dashboard',
    //canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./dashboard/dashboard.routes').then( m => m.routes )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];