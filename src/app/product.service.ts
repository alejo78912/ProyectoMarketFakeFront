import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrlInventory = 'http://localhost:8080/api/inventarios';
  private apiUrlProduct = 'http://localhost:8080/api/productos'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  productos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlInventory);
  }

  addproducto(producto: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrlInventory, producto);
  }

  addProduct(producto: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrlInventory, producto);
  }

  getAllProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlInventory);
  }

  
  getProductById(idProduct: number): Observable<Product> {
    const url = `${this.apiUrlProduct}/${idProduct}/product`;
    return this.http.get<Product>(url);
  }
  
}

