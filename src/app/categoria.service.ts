import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) {
    
   }

   
   categorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(this.apiUrl);
  }

  addCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>(this.apiUrl, categoria);
  }
}
