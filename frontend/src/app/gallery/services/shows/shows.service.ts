import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const SHOWSURL = 'http://localhost:8080/gallery';

@Injectable()
export class ShowsService {

  constructor(private http:Http) { }

  /**
   * get the shows information
   */
  getShowsInformation(): Observable<any> {
    let headers = new Headers;
    headers.append('token', localStorage.getItem('token'));
    return this.http.get(SHOWSURL);
  }

  /**
   * click on like button
   */
  likeShow(show): Observable<any> {
    let headers = new Headers;
    headers.append('token', localStorage.getItem('token'));
    return this.http.get(SHOWSURL);
  }

}

