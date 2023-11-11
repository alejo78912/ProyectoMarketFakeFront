import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product.model';
import { Cart } from './cart.model';
import { ProductsService } from '../product.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {
  carts!: Cart[];
  private id: string | null = localStorage.getItem('idUser');
  ced: number = this.id ? parseInt(this.id, 10) : 0;
  product! : Product;


  constructor(private cartService: CartService, private productsService : ProductsService) {}
  ngOnInit(): void {
    this.obtenerCarrito();
    // this.obtenerProductoDelPrimerCarrito(); // Move this call inside the subscribe callback
  }
  

  
  isEditable = true;

  getQuantityOptions(maxQuantity: number): number[] {
    return Array.from({ length: maxQuantity }, (_, index) => index + 1);
  }
 
  obtenerCarrito() {
    this.cartService.obtenerCarrito(this.ced).subscribe(
      (data) => {
        this.carts = data;
        console.log(data);
        this.obtenerProductoDelPrimerCarrito(); // Move it here
      },
      (error) => {
        console.error('Error al obtener el carrito:', error);
      }
    );
  }
  
  obtenerProductoDelPrimerCarrito() {
    // Check if carts is defined before accessing its length property
    if (this.carts && this.carts.length > 0) {
      for (const cart of this.carts) {
        // Check if the cart has products
        if (cart.product && cart.product.idProduct) {
          const idProduct = cart.product.idProduct;
          this.productsService.getProductById(idProduct).pipe(
            map((product1: Product) => {
              console.log('Producto obtenido:', product1);
              this.product = product1; // Update this line
              return this.product;
            })
          ).subscribe(); // Don't forget to subscribe to the Observable
        }
      }
    } else {
      console.warn('No hay carritos disponibles.');
    }
  }
}

