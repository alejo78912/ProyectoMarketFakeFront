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

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrlProduct}/${product.idProduct}/update`; 
    return this.http.put<Product>(url, product);
    }
    deleteProduct(idProduct: number): Observable<void> {
    const url = `${this.apiUrlProduct}/${idProduct}/delete`;
    return this.http.delete<void>(url);
  }

  uploadImage(input: File): Observable<string> {
    const file = new FormData();
    file.append('file', input);
    const photo = `${this.apiUrlProduct}/image`;
  
    return this.http.post<string>(photo, file);
    

  
  }
  
}

