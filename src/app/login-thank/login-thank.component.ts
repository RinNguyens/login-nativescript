import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'ns-login-thank',
  templateUrl: './login-thank.component.html',
  styleUrls: ['./login-thank.component.css']
})
export class LoginThankComponent implements OnInit {

  constructor(
      private routerExtensions: RouterExtensions
  ) { }

  ngOnInit(): void {
  }
  signin() {
      this.routerExtensions.navigate(['/login']);
  }

}
