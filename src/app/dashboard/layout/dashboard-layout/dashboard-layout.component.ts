import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.sass']
})
export class DashboardLayoutComponent {
  nowPlayingData: any = [];
  popularData: any = [];
  creditsData: any = {};
  constructor(private dashboardService: ServiceService){
    this.dashboardService.getNowPlaying().subscribe(
      data => {
        this.nowPlayingData = data.results;
      }
    );
    this.dashboardService.getPopular().subscribe(
      data => {
        this.popularData = data.results;
      }
    );
    this.dashboardService.getCredits('615656').subscribe(
      data => {
        this.creditsData.credits = data;
        this.creditsData.movieData = this.popularData[0];
      }
    );
  }

  getMovieData(id: string, movie: any){
    this.dashboardService.getCredits(id).subscribe(
      data => {
        console.log(data)
        this.creditsData.credits = data;
        this.creditsData.movieData = movie;
      }
    );
  }

}
