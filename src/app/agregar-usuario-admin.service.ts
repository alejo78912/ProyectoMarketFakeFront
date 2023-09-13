import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { UsuarioComponent } from './usuario/usuario.component';

@Injectable({
  providedIn: 'root'
})
export class AgregarUsuarioAdminService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // Reemplaza con la URL de tu API Spring Boot

  constructor(private http: HttpClient) {}

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}
