import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-login-reset-password',
  templateUrl: './login-reset-password.component.html',
  styleUrls: ['./login-reset-password.component.css']
})
export class LoginResetPasswordComponent implements OnInit {

  @ViewChild('email', {read : ElementRef, static: false}) email: ElementRef;
  @ViewChild('all' , {read: ElementRef, static: false}) all: ElementRef;

  constructor(
      private routerExtensions: RouterExtensions
  ) { }

  ngOnInit(): void {
  }
  animatedEmail() {
      this.email.nativeElement.animate({
          translate: {x:0, y:-20},
          duration: 500,
          curve: AnimationCurve.ease
      })
  }
  animatedAll() {
      if(this.all) {
          this.email.nativeElement.animate({
              translate: {x:0,y:0},
              duration: 200,
              curve: AnimationCurve.ease
          })
      }
  }
  signin() {
    this.routerExtensions.navigate(['/login']);
  }
  checkEmail() {
      this.routerExtensions.navigate(['/check-email']);
  }

}
