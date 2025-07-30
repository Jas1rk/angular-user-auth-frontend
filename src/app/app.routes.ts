import { Routes } from '@angular/router';
import { RegisterForm } from './pages/register-form/register-form';
import { LoginForm } from './pages/login-form/login-form';

export const routes: Routes = [
  { path: 'register', component: RegisterForm },
  { path: 'login', component: LoginForm },
];
