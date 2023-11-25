import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})export class CartService {
  private apiUrl = 'http://localhost:8080/api/cart'; // Reemplaza esto con la URL de tu backend Spring MVC

  constructor(private http: HttpClient) {}

  agregarProductoAlCarrito(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}`, cart);
  }

  obtenerCarrito(idUser :number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/${idUser}/carts`);
  }
  deleteCarrito(idCategory: number): Observable<void> {
    const url = `${this.apiUrl}/borrar-Carrito/${idCategory}`;
    return this.http.delete<void>(url);
  }

  checkProductInCart(idUser: number,idProduct: number): Observable<String> {
    const url = `${this.apiUrl}/checkProductInCart/${idUser}/${idProduct}`;
    return this.http.get<String>(url);
  }

  
  actualizarCantidad(nuevaCantidadObj: any): Observable<Cart> {
    const url = `${this.apiUrl}/changeQuantity`;
    return this.http.post<Cart>(url, nuevaCantidadObj);
  }
  


}
