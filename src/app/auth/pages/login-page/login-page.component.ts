import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginUser } from '../../interfaces';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.sass'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule ]
})
export class LoginPageComponent {
    constructor( private router: Router,
                 private fb: FormBuilder,
                 private authService: AuthService
                ) { }
    public loginForm = this.fb.group({
        email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
        password: ['', Validators.required ],
    });

    login() {
        const user: LoginUser = {
          email: this.loginForm.get('email')!.value || '',
          password: this.loginForm.get('password')!.value || ''  
        }
        this.authService.login(user).subscribe({
            next: (v) => {
                this.router.navigate(['/dashboard']);
            },
            error: (e) => {
                console.log(e);
            },
            complete: () => {
            }
        })
    
      }
}
