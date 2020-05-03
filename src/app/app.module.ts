import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { LoginVerifyEmailComponent } from './login-verify-email/login-verify-email.component';
import { LoginCompleteComponent } from './login-complete/login-complete.component';
import { LoginInvalidComponent } from './login-invalid/login-invalid.component';
import { LoginForgotPasswordComponent } from './login-forgot-password/login-forgot-password.component';
import { LoginResetPasswordComponent } from './login-reset-password/login-reset-password.component';
import { LoginCheckEmailComponent } from './login-check-email/login-check-email.component';
import { LoginNewPasswordComponent } from './login-new-password/login-new-password.component';
import { LoginThankComponent } from './login-thank/login-thank.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        LoginVerifyEmailComponent,
        LoginCompleteComponent,
        LoginInvalidComponent,
        LoginForgotPasswordComponent,
        LoginResetPasswordComponent,
        LoginCheckEmailComponent,
        LoginNewPasswordComponent,
        LoginThankComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
