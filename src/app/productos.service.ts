import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8080/api/inventarios';

  constructor(private http: HttpClient) { }

  productos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  addproducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
}

