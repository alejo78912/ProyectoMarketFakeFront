import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AgregarUsuarioAdminService {
  private apiUrl = '/api/usuarios'; // Reemplaza con la URL de tu API Spring Boot

  constructor(private http: HttpClient) {}

  addUsuario(usuario: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, usuario);
  }
}
