import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const URLLOGIN: string = 'http://localhost:8080/authenticate';
const URLREGISTER: string = 'http://localhost:8080/user';
@Injectable()
export class LoginService {

  constructor(private http:Http) {}

  /**
   * @param username
   * @param password
   */
  public login(username: string, password: string): Observable<any> {
    const params = {'username': username, 'password':password};
    return this.http.post(URLLOGIN, params);
  }

  /**
   * @param username
   * @param password
   */
  public register(username: string, password: string): Observable<any> {
    const params = {'username': username, 'password':password};
    return this.http.post(URLREGISTER, params);
  }

}
