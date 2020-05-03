import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationCurve } from 'tns-core-modules/ui/enums';

@Component({
  selector: 'ns-login-forgot-password',
  templateUrl: './login-forgot-password.component.html',
  styleUrls: ['./login-forgot-password.component.css']
})
export class LoginForgotPasswordComponent implements OnInit {

    @ViewChild('email' , {read: ElementRef, static: false}) email: ElementRef;
    constructor() { }

    ngOnInit(): void {
    }
    animatedEmail(){
      this.email.nativeElement.animate({
          translate: {x:0, y: -20},
          duration: 500,
          curve: AnimationCurve.ease
      })
    }

}
