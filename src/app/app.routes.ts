import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Task } from './task/task';
import { authGuard } from './core/auth/auth.guard';
import { loginGuard } from './core/auth/auth.guard';


export const routes: Routes = [
  { path: 'login', component: Login, canActivate : [loginGuard]},
  { path: 'task', component: Task, canActivate : [authGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

