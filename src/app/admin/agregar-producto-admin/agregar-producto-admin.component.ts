import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../../product.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

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
    supplier:{
      idSupplier:0,
      nameSupplier:"",
      addressSupplier:"",
      phoneNumberSupplier:"",
      emailSupplier:"",
      urlSupplier:""
    },
    productName: "",
    productDescription: "",
    }; // Inicializa el modelo

  constructor(private productoServicio: ProductsService) {}

  addProduct(): void {
   
      this.productoServicio.addProduct(this.Produto).subscribe((data) => {
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

      SwalUtils.customMessageOk('Articulo Agregado','Inventario actualizado'); 

    }

  vaciarCampos():void{

    this.Produto.idProduct = 0;
    this.Produto.price = 0;
    this.Produto.url_photo = "";
    this.Produto.quantityToSell = 0;
    this.Produto.category = {
      idCategory: 0,
      categoryName: ""
    };
    this.Produto.supplier ={
      idSupplier:0,
      nameSupplier:"",
      phoneNumberSupplier:"",
      emailSupplier:"",
      urlSupplier:"",
      addressSupplier:""
    };
    this.Produto.productName = "";
    this.Produto.productDescription = "";
    
  
  }


    
    ProductUpdate(): void {
   
      this.productoServicio.updateProduct(this.Produto).subscribe((data) => {
      this.vaciarCampos();
        
      });

      SwalUtils.customMessageOk('aProducto Editado','Base de datos actualizada'); 

    }

    ProductDelete(): void {
   
      this.productoServicio.deleteProduct(this.Produto.idProduct).subscribe((data) => {
      this.vaciarCampos();
        
      });

      SwalUtils.customMessageOk('Producto Eliminado','Base de datos actualizada'); 

    }
}
