import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/layout/nav-bar/nav-bar.component';
import { TopBarComponent } from './shared/layout/top-bar/top-bar.component';
import { DashboardViewsComponent } from './views/dashboard-views/dashboard-views.component';
import { DevicesViewsComponent } from './views/devices-views/devices-views.component';
import { LoginViewsComponent } from './views/login-views/login-views.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesViewsComponent } from './views/categories-views/categories-views.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphicPieComponent } from './components/graphic-pie/graphic-pie.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopBarComponent,
    DashboardViewsComponent,
    DevicesViewsComponent,
    LoginViewsComponent,
    CategoriesViewsComponent,
    GraphicPieComponent,
    GraphicBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
