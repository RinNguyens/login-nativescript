import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LoginVerifyEmailComponent } from './login-verify-email/login-verify-email.component';
import { LoginCompleteComponent } from './login-complete/login-complete.component';
import { LoginInvalidComponent } from './login-invalid/login-invalid.component';
import { LoginForgotPasswordComponent } from './login-forgot-password/login-forgot-password.component';
import { LoginResetPasswordComponent } from './login-reset-password/login-reset-password.component';
import { LoginCheckEmailComponent } from './login-check-email/login-check-email.component';
import { LoginNewPasswordComponent } from './login-new-password/login-new-password.component';
import { LoginThankComponent } from './login-thank/login-thank.component';


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "verify-email", component: LoginVerifyEmailComponent},
    { path: "complete", component: LoginCompleteComponent},
    { path: "login-invalid" , component: LoginInvalidComponent},
    { path: "forgot-password", component: LoginForgotPasswordComponent},
    { path: "reset-password", component: LoginResetPasswordComponent},
    { path: "check-email", component: LoginCheckEmailComponent},
    { path: "new-pass", component: LoginNewPasswordComponent},
    { path: "login-thank", component: LoginThankComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
