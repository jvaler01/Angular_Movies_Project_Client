import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CardOutTextComponent } from '../../components/cardComponent/card-out-text/card-out-text.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CardBodyComponent } from '../../components/cardComponent/card-body/card-body.component';
import { CardComponent } from '../../components/cardComponent/card/card.component';
import { CardContainerComponent } from '../../components/cardComponent/card-container/card-container.component';
import { NgFor, NgIf } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
    selector: 'app-dashboard-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.sass'],
    standalone: true,
    imports: [NavBarComponent, NgFor, CardContainerComponent, CardComponent, CardBodyComponent, LazyLoadImageModule, CardOutTextComponent, NgIf]
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
