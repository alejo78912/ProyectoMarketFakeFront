import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from './sale.model';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private apiUrl = 'http://localhost:8080/api/ventas';

  constructor(private http: HttpClient) {}

// Modify the method to accept both sale and user information
addSale(User: User): Observable<Blob> {


  const url = `${this.apiUrl}/make-purchase`;
  return this.http.post(url, User, { responseType: 'blob' });
}



}
