import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { RequestCategoria } from '../../models/Categorias/RequestCategoria';
import { RequestSubcategoria } from '../../models/Subcategorias/RequestSubcategoria';
import { ResponseSubcategoria } from '../../models/Subcategorias/ResponseSubcategoria';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor(private httpClient: HttpClient) { }

  public loadSubcategorias(id: number): Observable<ResponseSubcategoria[]> {
    return this.httpClient.get<ResponseSubcategoria[]>('http://127.0.0.1:8000/api/subcategory/find/'+id).pipe(map((res: any) => Object.values(res)));
  }

  public saveSubcategorias(requestSubcategoria: RequestSubcategoria): Observable<ResponseSubcategoria> {
    return this.httpClient.post<ResponseSubcategoria>('http://127.0.0.1:8000/api/subcategory/save', requestSubcategoria);
  }
}
