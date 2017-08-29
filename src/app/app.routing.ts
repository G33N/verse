import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TemplateComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'header',
        component: DashboardHeaderComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const routes = RouterModule.forRoot(router);
