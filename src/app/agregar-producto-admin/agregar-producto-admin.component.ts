import { Component } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-agregar-producto-admin',
  templateUrl: './agregar-producto-admin.component.html',
  styleUrls: ['./agregar-producto-admin.component.css']
})
export class AgregarProductoAdminComponent {
  Produto: Producto = { codProducto: 0,
    valor: 0,
    cantidadAVender: 0,
    nombreProducto: "",
    idCategoria: 0,
    descripcionProducto: "",
    url_photo: ""}; // Inicializa el modelo

  constructor(private productoServicio: ProductosService) {}

  addProducto(): void {
   
      this.productoServicio.addproducto(this.Produto).subscribe((data) => {
        // Puedes realizar acciones adicionales aquí, como actualizar la lista de tareas
        
      });
    }
}
