import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from './sale.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private apiUrl = 'http://localhost:8080/api/ventas';

  constructor(private http: HttpClient) {}

// sale.service.ts
addSale(sale: Sale, totalQuantity: number): Observable<Blob> {
  const url = `${this.apiUrl}/make-purchase?totalQuantity=${totalQuantity}`;
  return this.http.post(url, sale, { responseType: 'blob' });
}



}
