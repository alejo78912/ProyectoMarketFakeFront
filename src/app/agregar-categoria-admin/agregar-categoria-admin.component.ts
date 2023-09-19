import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoriaService } from '../category.service';

@Component({
  selector: 'app-agregar-categoria-admin',
  templateUrl: './agregar-categoria-admin.component.html',
  styleUrls: ['./agregar-categoria-admin.component.css']
})
export class AgregarCategoriaAdminComponent implements OnInit{
  categorias: Category[] = [];
  categoria: Category = {
    categoryName: "",
    idCategory: 0
  }; // Inicializa el modelo

  constructor(private CategoriaServicio: CategoriaService) {}

  addCategoria(): void {
   
      this.CategoriaServicio.addCategoria(this.categoria).subscribe((data) => {
        this.ngOnInit();
        
      });
    }

    ngOnInit(): void {
      this.CategoriaServicio.categorias().subscribe(data => {
        this.categorias = data;
      });
    }
   
}
