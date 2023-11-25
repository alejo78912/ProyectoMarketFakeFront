import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product.model';
import { Cart } from './cart.model';
import { ProductsService } from '../product.service';
import {  map } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  can: number=0
  cart! : Cart


  constructor(private cartService: CartService, private productsService : ProductsService, private router: Router) {}
  ngOnInit(): void {
    this.obtenerCarrito();
    this.asignarValorPorDefecto();

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
      // Use Swal.fire with a confirm button
    Swal.fire({
      title: 'No hay productos en el carrito',
      text: 'Ups, no cuentas con productos en el carrito',
      icon: 'warning',
      confirmButtonText: 'Ir a la sección de artículos',
      
    }).then((result) => {
      if (result.isConfirmed) {
        // Navegar a la sección de artículos al hacer clic en el botón de confirmación
        this.router.navigate(['/articulos']);
      }
    });
    }
  }

 // ... Tu código actual ...

// Función para calcular el total de la compra
calcularTotal(): number {
  let total = 0;

  if (this.carts) {
    this.carts.forEach(cart => {
      total += cart.product.price * cart.totalQuantity;
    });
  }

  return total;
}


asignarValorPorDefecto(): void {
  // Verifica si hay carritos y si los carritos tienen productos
  if (this.carts && this.carts.length > 0) {
    // Itera sobre cada carrito
    this.carts.forEach((cart) => {
      // Verifica si el carrito tiene un producto
      if (cart.product) {
        // Asigna el valor por defecto al quantityToSell del producto en el carrito
        cart.product.quantityToSell = 1; // Puedes ajustar el valor por defecto según tus necesidades
      }
    });
  }
}

actualizarTotal(cart: Cart, event: any): void {
  const nuevaCantidad = event?.target?.value;

  if (nuevaCantidad !== undefined) {
    // Verificar si totalQuantity está definido; si no, establecerlo por defecto
    cart.totalQuantity = cart.totalQuantity || 1;

    // Actualizar la cantidad en el objeto Cart
    cart.totalQuantity = parseInt(nuevaCantidad, 10);

    // Llama al servicio para actualizar la cantidad en el carrito
    this.cartService.actualizarCantidad(cart).subscribe(
      (updatedCart) => {
       
        this.calcularTotal();
      },
      (error) => {
        console.error('Error al actualizar la cantidad en el carrito:', error);
      }
    );
  }
}





// ...


// ... Tu código actual ...


// Función para simular la compra
comprar(): void {
  

    this.router.navigateByUrl("sale");

}


}
