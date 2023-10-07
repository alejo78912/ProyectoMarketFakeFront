import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})export class CartService {
  private apiUrl = 'http://localhost:8080/api/cart'; // Reemplaza esto con la URL de tu backend Spring MVC

  constructor(private http: HttpClient) {}

  agregarProductoAlCarrito(productId: number) {
    return this.http.post(`${this.apiUrl}/agregar-producto/${productId}`, {});
  }

  obtenerCarrito(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/showCart`);
  }
  deleteCarrito(idCategory: number): Observable<void> {
    const url = `${this.apiUrl}/borrar-Carrito/${idCategory}`;
    return this.http.delete<void>(url);
  }

  verificarProductoEnCarrito(idProduct: number): Observable<Product> {
    const url = `${this.apiUrl}/buscar/${idProduct}`;
    return this.http.get<Product>(url);
  }

  actualizarProductoEnCarrito(idProducto: number, productoActualizado: Product): Observable<void> {
    const url = `${this.apiUrl}/actualizar-Carrito/${idProducto}`;
    return this.http.put<void>(url, productoActualizado);
  }
}
