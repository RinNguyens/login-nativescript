import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationCurve } from "tns-core-modules/ui/enums";

@Component({
  selector: 'ns-login-invalid',
  templateUrl: './login-invalid.component.html',
  styleUrls: ['./login-invalid.component.css']
})
export class LoginInvalidComponent implements OnInit {


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
