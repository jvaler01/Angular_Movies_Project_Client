import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.sass']
})
export class DashboardLayoutComponent {
  constructor(private dashboardService: ServiceService){
    this.dashboardService.getNowPlaying().subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
