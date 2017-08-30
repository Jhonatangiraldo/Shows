import { BaseRequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService extends BaseRequestOptions  {
    headers: Headers = new Headers({
        'token': localStorage.getItem('token')
    });

}
