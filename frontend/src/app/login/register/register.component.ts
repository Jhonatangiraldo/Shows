import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private differentPass: boolean;
  public username: string;
  public password: string;
  public confirmPassword: string;
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.differentPass = false;
  }

  /**
   * create user
   */
  public create() {
    if (this.password !== this.confirmPassword) {
      this.differentPass = true;
    } else {
      this.differentPass = false;
      this.register();
    }
  }

  /**
   * register in bd
   */
  private register() {
    this.loginService.register(this.username, this.password).subscribe((response: Response) => {
        const data: any = response.json();
        if (data.success === true) {
            alert('User registered');
            this.router.navigate(['/login']);
        } else {
            alert('Server response with error');
        }
    });
  }

}
