import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardModule } from './components/cardComponent/card.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    LazyLoadImageModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
