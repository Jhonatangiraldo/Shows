import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  private password: string;
  private loginBad: boolean;
  constructor(public loginService: LoginService,
              private router: Router) {}

  ngOnInit() {
      this.loginBad = false;
  }

  private login() {
    this.loginService.login(this.username, this.password).subscribe((response: Response) => {
        const data: any = response.json();
        if (data.success === true) {
            this.loginBad = true;
            localStorage.setItem('token', data.token);
            this.router.navigate(['/gallery']);
        } else {
            this.loginBad = true;
        }
    });
  }

}
