import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { View } from 'tns-core-modules/ui/page';
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-login-new-password',
  templateUrl: './login-new-password.component.html',
  styleUrls: ['./login-new-password.component.css']
})
export class LoginNewPasswordComponent implements OnInit {

  @ViewChild('password', {read: ElementRef, static: false}) password: ElementRef;
  @ViewChild('passwordConfig', {read: ElementRef, static: false}) passwordConfig: ElementRef;

  constructor(
      private routerExtensions: RouterExtensions
  ) { }

  ngOnInit(): void {
  }
  animatedPass() {
    this.password.nativeElement.animate({
        translate: {x:0, y: -20},
        duration: 500,
        curve: AnimationCurve.ease
    })
  }
  animatedPassConfig() {
      this.passwordConfig.nativeElement.animate({
          translate: {x:0,y:-20},
          duration: 500,
          curve: AnimationCurve.ease
      })
  }
  login() {
    this.routerExtensions.navigate(['/login']);
  }
}
