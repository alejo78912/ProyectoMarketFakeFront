import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {
  products!: Product[];

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.obtenerCarrito();
  }

  agregarProductoAlCarrito(productId: number) {
    this.cartService.agregarProductoAlCarrito(productId).subscribe(
      (response) => {
        // Manejar la respuesta del backend aquí
        console.log('Producto agregado al carrito:', response);
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error al agregar producto al carrito:', error);
      }
    );
  }

  

 
  isEditable = true;

  getQuantityOptions(maxQuantity: number): number[] {
    return Array.from({ length: maxQuantity }, (_, index) => index + 1);
  }
 

  obtenerCarrito() {
    this.cartService.obtenerCarrito().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error al obtener el carrito:', error);
      }
    );
  }

}
