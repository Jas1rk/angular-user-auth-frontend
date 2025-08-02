import { Routes } from '@angular/router';
import { RegisterForm } from './pages/register-form/register-form';
import { LoginForm } from './pages/login-form/login-form';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  {path:'',component:HomePage},
  { path: 'register', component: RegisterForm },
  { path: 'login', component: LoginForm },
];
