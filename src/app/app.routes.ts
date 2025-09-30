// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PaymentForm } from './Components/payment-form/payment-form';
import { AdminLogin } from './Components/admin-login/admin-login';
import { AdminDashboard } from './Components/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: 'payment', component: PaymentForm },
  { path: 'admin/login', component: AdminLogin },
  { path: 'admin/dashboard', component: AdminDashboard },
  { path: '', redirectTo: 'payment', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'payment' } 
];
