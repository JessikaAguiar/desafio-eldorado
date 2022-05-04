import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, ObservableInput } from 'rxjs';

import apiConfig from '../config/api';
import Device from '../models/Device';
import IResponse from '../models/IResponse';
import Response from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private httpClient: HttpClient, private router: Router) { }

  private verifyToken(error: any): ObservableInput<any> {
    console.log('ERROR', error)

    if (error.status === 401) {
      this.router.navigate([''])
    }

    throw new Error('Não autorizado')
  }

  getDevices(): Observable<IResponse<Device[]>> {
    const token = localStorage.getItem('token')

    return this.httpClient.get<IResponse<Device[]>>(`${apiConfig.baseUrl}/devices`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<Device[]>()),
        catchError(this.verifyToken)
      )
  }

  createDevice(device: Device): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    console.log('Device', device)

    return this.httpClient.post<IResponse<any>>(`${apiConfig.baseUrl}/devices`, device, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<any>()),
        catchError(this.verifyToken)
      )
  }

  editCategory(deviceId: number, device: Device): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')
    return this.httpClient.put<IResponse<any>>(`${apiConfig.baseUrl}/devices/${deviceId}`,device, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<any>()),
        catchError(this.verifyToken)
      )
  }

  deleteDevice(deviceId: number): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    return this.httpClient.delete<IResponse<any>>(`${apiConfig.baseUrl}/devices/${deviceId}`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<any>()),
        catchError(this.verifyToken)
      )
  }
}
