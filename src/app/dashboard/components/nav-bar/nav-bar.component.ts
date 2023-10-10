import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.sass'],
    standalone: true,
    imports: []
})
export class NavBarComponent {

    private authservice = inject( AuthService );
    private router = inject( Router );
    logout() {
        this.authservice.logout();
        this.router.navigate(['/']);
    }
    get currentUser(){
        return this.authservice.currentUser();
    }
}
