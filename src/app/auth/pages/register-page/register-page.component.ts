import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.sass'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule ]
})
export class RegisterPageComponent {
    constructor( private router: Router,
            private fb: FormBuilder,
            private authService: AuthService
        ) { }
        public signupForm = this.fb.group({
            username: ['', Validators.required ],
            surname: ['', Validators.required ],
            bornDate: [new Date(), Validators.required ],
            email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
            password: ['', Validators.required ],
        });

        signup() {
            const user: User = {
                username: this.signupForm.get('username')!.value || '',
                surname: this.signupForm.get('surname')!.value || '',
                bornDate: this.signupForm.get('bornDate')!.value || new Date(),
                email: this.signupForm.get('email')!.value || '',
                password: this.signupForm.get('password')!.value || ''  
            }
            this.authService.signup(user).subscribe({
                next: (v) => {
                    console.log(v);
                    this.router.navigate(['/auth/login'])
                },
                error: (e) => {
                    console.log(e);
                },
                complete: () => {
                    console.log('complete');
                }
            })
        }
}
