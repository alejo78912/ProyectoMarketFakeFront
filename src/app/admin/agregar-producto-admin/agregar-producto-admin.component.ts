import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../../product.service';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { CartService } from 'src/app/cart/cart.service';

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

  constructor(private productoServicio: ProductsService, private cartService: CartService) {}


  addProduct(): void {
    if (this.Produto.price <= 0 || this.Produto.quantityToSell <= 0) {
      // Mostrar mensaje de error si el precio o la cantidad son negativos o cero
      SwalUtils.customMessageError('Error', 'El precio y la cantidad deben ser mayores que cero.');
      return; // No continuar con la operación si los valores son inválidos
    }
  
    // Continuar con la lógica para agregar el producto solo si los valores son válidos
   
      
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
      this.vaciarCampos();
   
  
    SwalUtils.customMessageOk('Articulo Agregado', 'Inventario actualizado');
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
      if (this.Produto.price <= 0 || this.Produto.quantityToSell <= 0) {
      // Mostrar mensaje de error si el precio o la cantidad son negativos o cero
      SwalUtils.customMessageError('Error', 'El precio y la cantidad deben ser mayores que cero.');
      return; // No continuar con la operación si los valores son inválidos
    }
   
      this.productoServicio.actualizarProducto(this.Produto.idProduct, this.Produto).subscribe((data) => {
      this.vaciarCampos();
        
      });

      SwalUtils.customMessageOk('aProducto Editado','Base de datos actualizada'); 

    }

    ProductCartUpdate(): void {
      if (this.Produto.price <= 0 || this.Produto.quantityToSell <= 0) {
        // Mostrar mensaje de error si el precio o la cantidad son negativos o cero
        SwalUtils.customMessageError('Error', 'El precio y la cantidad deben ser mayores que cero.');
        return; // No continuar con la operación si los valores son inválidos
      }
   
      this.cartService.actualizarProductoEnCarrito(this.Produto.idProduct, this.Produto).subscribe((data) => {
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

    ProductDeleteCart(): void{

      this.cartService.deleteCarrito(this.Produto.idProduct).subscribe((data) => {
        
        SwalUtils.customMessageOk('Producto Eliminado','Base de datos actualizada'); 
        this.vaciarCampos();

      });

    }

    borar(){

    
      this.ProductDeleteCart();
      this.ProductDelete();

    }

    edit(){
      this.ProductCartUpdate();
      this.ProductUpdate();
    }
}
