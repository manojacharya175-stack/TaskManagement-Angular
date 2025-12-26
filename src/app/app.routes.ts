import { Routes } from '@angular/router';
import { Login } from './login/login';
import { TaskPage } from './task/task';
import { authGuard } from './core/auth/auth.guard';
import { loginGuard } from './core/auth/auth.guard';


export const routes: Routes = [
  { path: 'login', component: Login, canActivate : [loginGuard]},
  { path: 'task', component: TaskPage, canActivate : [authGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

