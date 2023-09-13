import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-agregar-categoria-admin',
  templateUrl: './agregar-categoria-admin.component.html',
  styleUrls: ['./agregar-categoria-admin.component.css']
})
export class AgregarCategoriaAdminComponent implements OnInit{
  categorias: CategoriaModel[] = [];
  categoria: CategoriaModel = { nombreCategoria: ""}; // Inicializa el modelo

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
