import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




// Resto de tu código
export interface RespuestaInicioSesion {
  tipo_usuario: string;
  // Otros campos si es necesario
}

@Injectable({
  providedIn: 'root'
})
export class IniciarSesionService {
 
  email: string = '';
  password: string = '';
  private apiUrl = 'http://localhost:8080/api/auth'; // ajusta esta URL según tu backend

 

  constructor(private http: HttpClient) {}

  // Autenticar al usuario y obtener el tipo de usuario
  login(correo: string, contrasena: string): Observable<any> {
    const credentials = { correo, contrasena };
    return this.http.post<any>('http://localhost:8080/api/auth', credentials);
  }
}
     

    



    

