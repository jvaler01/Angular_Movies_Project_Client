import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
    declarations:[
        AuthLayoutComponent,
        LoginPageComponent,
        RegisterPageComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ]
})
export class AuthMogule {}