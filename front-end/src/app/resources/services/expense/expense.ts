import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../../models/expense/expense';

const baseUrl = 'http://localhost:8000/api/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(baseUrl);
  }

  get(id: any): Observable<Expense> {
    return this.http.get(`${baseUrl}/${id}`);
  }


}