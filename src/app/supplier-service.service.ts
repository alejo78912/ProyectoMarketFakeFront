import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from './supplier.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {
  private apiUrl = 'http://localhost:8080/api/suppliers'; // Reemplaza con la URL de tu API Spring Boot

  constructor(private http: HttpClient) {}

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl, supplier);
  }

  suppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrl);
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {
    const url = `${this.apiUrl}/${supplier.idSupplier}/update`; 
    return this.http.put<Supplier>(url, supplier);
    }
  
  deleteSupplier(idSupplier: number): Observable<void> {
    const url = `${this.apiUrl}/${idSupplier}/delete`;
    return this.http.delete<void>(url);
  }

  
  getProductosBySupplier(idSupplier: number): Observable<Product[]> {
    const url = `${this.apiUrl}/${idSupplier}/products`;
    return this.http.get<Product[]>(url);
  }


}
