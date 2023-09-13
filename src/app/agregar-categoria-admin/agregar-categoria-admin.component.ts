import { Component } from '@angular/core';
import { CategoriaModel } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-agregar-categoria-admin',
  templateUrl: './agregar-categoria-admin.component.html',
  styleUrls: ['./agregar-categoria-admin.component.css']
})
export class AgregarCategoriaAdminComponent {
  categoria: CategoriaModel = { nombreCategoria: ""}; // Inicializa el modelo

  constructor(private CategoriaServicio: CategoriaService) {}

  addProducto(): void {
   
      this.CategoriaServicio.addproducto(this.categoria).subscribe((data) => {
        // Puedes realizar acciones adicionales aquí, como actualizar la lista de tareas
        
      });
    }
}
