import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, ObservableInput } from 'rxjs';

import apiConfig from '../config/api';
import Category from '../models/Category';
import IResponse from '../models/IResponse';
import Response from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient, private router: Router) { }

  private verifyToken(error: any): ObservableInput<any> {
    if (error.status === 401) {
      this.router.navigate(['/'])
    }
    throw new Error('Não autorizado')
  }

  getCategories(): Observable<IResponse<Category[]>> {
    const token = localStorage.getItem('token')
    return this.httpClient.get<IResponse<Category[]>>(`${apiConfig.baseUrl}/categories`, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<Category[]>()),
        catchError(this.verifyToken)
      )
  }

  createCategory(category: Category): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    return this.httpClient.post<IResponse<any>>(`${apiConfig.baseUrl}/categories`, category, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<any>()),
        catchError(this.verifyToken)
      )
  }

  editCategory(categoryId: number, category: Category): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')
    return this.httpClient.put<IResponse<any>>(`${apiConfig.baseUrl}/categories/${categoryId}`,category, {
      headers: { 'Authorization': `Bearer ${token}` },
      observe: 'response',
      responseType: 'json'
    })
      .pipe(
        map((response) => response.body || new Response<any>()),
        catchError(this.verifyToken)
      )
  }

  deleteCategory(categoryId: number): Observable<IResponse<any>> {
    const token = localStorage.getItem('token')

    return this.httpClient.delete<IResponse<any>>(`${apiConfig.baseUrl}/categories/${categoryId}`, {
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
