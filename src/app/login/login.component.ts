import { Component, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { AbsoluteLayout } from 'tns-core-modules/ui/layouts/absolute-layout';
import { AnimationCurve } from "tns-core-modules/ui/enums";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})


export class LoginComponent {

    isLoggingIn = true;
    processing = false;
    @ViewChild("password", { static: false }) password: ElementRef;
    @ViewChild("confirmPassword", { static: false }) confirmPassword: ElementRef;
    @ViewChild("target", { read: ElementRef, static: false }) view: ElementRef;
    @ViewChild("pass", { read: ElementRef, static: false }) myView: ElementRef;
    @ViewChild("passConfig", { read: ElementRef, static: false }) passConfig: ElementRef;

    constructor(
        private page: Page,
        private routerExtensions: RouterExtensions) {
    }

    animatedAll() {
        this.view.nativeElement.animate({
            translate: { x: 0, y: -22 },
            duration: 500,
            curve: AnimationCurve.ease
        });
    }
    animatedPass() {
        this.myView.nativeElement.animate({
            translate: { x: 0, y: -22 },
            duration: 500,
            curve: AnimationCurve.ease
        })
    }
    animatedPassConfig() {
        this.passConfig.nativeElement.animate({
            translate: { x: 0, y: -22 },
            duration: 500,
            curve: AnimationCurve.ease
        })
    }
    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }
    submit() {
        this.routerExtensions.navigate(['/verify-email']);
    }

    forgotPassword(){
        this.routerExtensions.navigate(['/reset-password']);
    }



}

