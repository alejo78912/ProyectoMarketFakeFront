import { Component } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-agregar-producto-admin',
  templateUrl: './agregar-producto-admin.component.html',
  styleUrls: ['./agregar-producto-admin.component.css']
})
export class AgregarProductoAdminComponent {
  
  Produto: Producto = { 
    
    codProducto: 0,
    valor: 0,
    url_photo: "",
    cantidadAVender: 0,
    categoria:{
      idCategoria: 0,
      nombreCategoria: ''
    },
    nombreProducto: "",
    descripcionProducto: "",
    }; // Inicializa el modelo

  constructor(private productoServicio: ProductosService) {}

  addProducto(): void {
   
      this.productoServicio.addproducto(this.Produto).subscribe((data) => {
        // Puedes realizar acciones adicionales aquí, como actualizar la lista de tareas
        this.Produto.codProducto = 0;
        this.Produto.valor = 0;
        this.Produto.url_photo = "";
        this.Produto.cantidadAVender = 0;
        this.Produto.categoria = {
          idCategoria: 0,
          nombreCategoria: ""
        };
        this.Produto.nombreProducto = "";
        this.Produto.descripcionProducto = "";
        
      });
    }
}
