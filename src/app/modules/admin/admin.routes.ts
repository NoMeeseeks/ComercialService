import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: LoginComponent
  },
];

