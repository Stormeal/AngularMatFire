import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AppBlankComponent,
    children: [{
      path: '',
      redirectTo: '/authentication/login',
      pathMatch: 'full'
    }, {
      path: '',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }, {
      path: 'starter',
      loadChildren: './starter/starter.module#StarterModule'
    }, ]
  },

  {
    path: '',
    component: FullComponent,
    children: [{
      path: '',
      redirectTo: '/starter',
      pathMatch: 'full'
    }, {
      path: '',
      loadChildren: './material-component/material.module#MaterialComponentsModule'
    }, {
      path: 'starter',
      loadChildren: './starter/starter.module#StarterModule'
    }, ]
  },
  {
    path: '',
    component: AppBlankComponent,
    children: [{
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }]
  }, {
    path: '**',
    redirectTo: 'authentication/404'
  }];
