import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 
import { ResponseExpenses } from '../../models/Expenses/ResponseExpenses';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private httpClient: HttpClient) { }


  public loadExpenses(id: number): Observable<ResponseExpenses[]> {
    return this.httpClient.get<ResponseExpenses[]>('http://127.0.0.1:8000/api/expense/find/'+id).pipe(map((res: any) => Object.values(res)));
  }

}
