import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { RequestCategoria } from '../../models/Categorias/RequestCategoria';
import { ResponseCategoria } from '../../models/Categorias/ResponseCategoria';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }
  
  public saveCategorias(requestCategoria: RequestCategoria): Observable<ResponseCategoria>{
    return this.httpClient.post<ResponseCategoria>('http://127.0.0.1:8000/api/category/save', requestCategoria);
  }

  public getCategorias(): Observable<ResponseCategoria[]> {
    return this.httpClient.get<ResponseCategoria[]>('http://127.0.0.1:8000/api/category').pipe(map((res: any) => Object.values(res)));
  }
}

