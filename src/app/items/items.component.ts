import { Component, OnInit  } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../product.service';
import { CartService } from '../cart/cart.service';
import { SwalUtils } from '../utils/swal-utils';
import { SharedServiceService } from '../shared-service.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  productos: Product[] = [];
  auxProducts:Product[] = this.productos;
  filteredProducts:Product[] = [];
  cart: Product[] = [];
  busque: string = '';

  constructor(
    private sharedService: SharedServiceService,
    private ProductsService: ProductsService,
    private cartService: CartService
  ) {}


  capture(busqued: any) {
    
    console.log(this.busque);
    this.filterProducts();
    console.log(this.filteredProducts);
    if(this.busque!=''){
      this.auxProducts=this.filteredProducts
    }else{
      this.auxProducts=this.productos
      
    }
    
    // You can perform additional actions here based on the search query.
  }

  filterProducts(){
    
    this.filteredProducts=[];
    for (let i = 0; i < this.productos.length; i++) {
      if(this.productos[i].productName.toLowerCase().includes(this.busque.toLowerCase()) || 
      this.productos[i].productDescription.toLowerCase().includes(this.busque.toLowerCase()) ||
      this.productos[i].category.categoryName.toLowerCase().includes(this.busque.toLowerCase()) ){
        this.filteredProducts.push(this.productos[i]);
      }
    }
  }
 
 
  agregarProductoAlCarrito(idProducto: number): void {
    this.cartService.verificarProductoEnCarrito(idProducto).subscribe(
      productoEnCarrito => {
        if (productoEnCarrito) {
         
          SwalUtils.customMessageError('El producto ya está en el carrito.','agregue otro'); 
        } else {
          this.cartService.agregarProductoAlCarrito(idProducto).subscribe(
            (response) => {
              SwalUtils.customMessageOk('El producto se agregó con exito.','sigue comprando'); 
            });
        }
      },
      error => {
        console.error('Error al verificar el producto en el carrito', error);
        // Maneja errores si es necesario
      }
    );
  }

  ngOnInit(): void {
    this.ProductsService.productos().subscribe(data => {
      this.productos = data;
      this.auxProducts=this.productos
    });

    this.sharedService.getSearchQuery().subscribe((query) => {
      this.busque = query;
      this.capture(this.busque);
      
    });
  }
}
