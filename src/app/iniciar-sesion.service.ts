import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  view: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Ajusta esta URL según tu backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const credentials = { email, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }
}
