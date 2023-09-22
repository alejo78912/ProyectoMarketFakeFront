import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://localhost:8080/api/categorias';

  constructor(private http: HttpClient) {
    
   }

   
  categorias(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  addCategoria(categoria: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, categoria);
  }

  getCategoriaById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  updateCategory(category: Category): Observable<Category> {
    const url = `${this.apiUrl}/${category.idCategory}/update`; 
    return this.http.put<Category>(url, category);
    }
    deleteCategory(idCategory: number): Observable<void> {
    const url = `${this.apiUrl}/${idCategory}/delete`;
    return this.http.delete<void>(url);
  }



}
