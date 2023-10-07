import { Component, OnInit  } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../product.service';
import { CartService } from '../cart/cart.service';
import { SwalUtils } from '../utils/swal-utils';


@Component({
  selector: 'app-articulos',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  productos: Product[] = [];
  cart: Product[] = [];


  constructor(private ProductsService: ProductsService,private cartService: CartService) { }


 
 
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
    });
  }
}
