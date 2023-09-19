import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/api/inventarios';

  constructor(private http: HttpClient) { }

  productos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addproducto(producto: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, producto);
  }

  addProduct(producto: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, producto);
  }

  getAllProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  
}

