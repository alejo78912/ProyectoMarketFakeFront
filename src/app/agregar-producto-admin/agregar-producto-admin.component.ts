import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductosService } from '../product.service';

@Component({
  selector: 'app-agregar-producto-admin',
  templateUrl: './agregar-producto-admin.component.html',
  styleUrls: ['./agregar-producto-admin.component.css']
})
export class AgregarProductoAdminComponent {
  
  Produto: Product = { 
    
    idProduct: 0,
    price: 0,
    url_photo: "",
    quantityToSell: 0,
    category:{
      idCategory: 0,
      categoryName: ''
    },
    productName: "",
    productDescription: "",
    }; // Inicializa el modelo

  constructor(private productoServicio: ProductosService) {}

  addProducto(): void {
   
      this.productoServicio.addproducto(this.Produto).subscribe((data) => {
        // Puedes realizar acciones adicionales aquí, como actualizar la lista de tareas
        this.Produto.idProduct = 0;
        this.Produto.price = 0;
        this.Produto.url_photo = "";
        this.Produto.quantityToSell = 0;
        this.Produto.category = {
          idCategory: 0,
          categoryName: ""
        };
        this.Produto.productName = "";
        this.Produto.productDescription = "";
        
      });
    }
}
