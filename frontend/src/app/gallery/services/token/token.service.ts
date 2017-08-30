import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  constructor(private router: Router) { }

  public logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
