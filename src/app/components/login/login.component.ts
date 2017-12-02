import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : any = {};
  loginSucces : boolean;
  finished = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.finished = false;
    this.authService.loginAsAdmin(this.model.password)
      .subscribe(() => {this.loginSucces = true; this.finished = true},
                  () => {this.loginSucces = false; this.finished = true});
  }

}
