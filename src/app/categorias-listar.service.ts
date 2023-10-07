import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasListarService {
  private apiUrl = 'http://localhost:8080/api/categorias'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getProductosByCategoria(idCategoria: number): Observable<Product[]> {
    const url = `${this.apiUrl}/${idCategoria}/products`;
    return this.http.get<Product[]>(url);
  }

  
}
