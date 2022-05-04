import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import apiConfig from '../config/api';
import IResponse from '../models/IResponse';
import Auth from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  auth(name: string, password: string): Observable<IResponse<Auth>> {
    return this.httpClient.post<IResponse<Auth>>(`${apiConfig.baseUrl}/login`, { name, password });
  }
}
