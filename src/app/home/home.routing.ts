import { Routes } from '@angular/router';


import { Home1Component } from './home1/home1.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'home1',
      component: Home1Component
    },]
  }
];
