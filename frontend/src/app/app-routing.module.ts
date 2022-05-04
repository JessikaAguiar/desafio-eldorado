import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewsComponent } from './views/login-views/login-views.component';
import { DashboardViewsComponent } from './views/dashboard-views/dashboard-views.component';
import { DevicesViewsComponent } from './views/devices-views/devices-views.component';
import { CategoriesViewsComponent } from './views/categories-views/categories-views.component';

const routes: Routes = [
  { path: '', component: LoginViewsComponent },
  { path: 'login', component: LoginViewsComponent },
  { path: 'dashboard', component: DashboardViewsComponent },
  { path: 'devices', component: DevicesViewsComponent },
  { path: 'categories', component: CategoriesViewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
