import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }


    usuarios(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
    }

    updateUsuario(user: User): Observable<User> {
      const url = `${this.apiUrl}/${user.idUser}/update`; 
      return this.http.put<User>(url, user);
      }
      deleteUsuario(idUser: number): Observable<void> {
      const url = `${this.apiUrl}/${idUser}/delete`;
      return this.http.delete<void>(url);
    }
  }

