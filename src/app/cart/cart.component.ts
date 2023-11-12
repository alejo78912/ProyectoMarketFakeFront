import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product.model';
import { Cart } from './cart.model';
import { ProductsService } from '../product.service';
import { Observable, map } from 'rxjs';
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


  constructor(private cartService: CartService, private productsService : ProductsService, private router: Router) {}
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
      total += cart.product.price * cart.product.quantityToSell;
    });
  }

  return total;
}

// ... Tu código actual ...

// Función para manejar el cambio en la cantidad desde el combo
actualizarTotal(cart: Cart, event: any): void {
  const nuevaCantidad = event.target?.value; // Usar el operador de navegación segura
  if (nuevaCantidad !== undefined) {
    // Actualizar la cantidad en el objeto Cart
    cart.product.quantityToSell = parseInt(nuevaCantidad, 10);

    // Puedes agregar lógica adicional aquí según tus necesidades

    // Recalcular el total después del cambio en la cantidad
    const nuevoTotal = this.calcularTotal();
    console.log('Nuevo Total:', nuevoTotal);
  }
}

// ... Tu código actual ...


// Función para simular la compra
comprar(): void {
  // Aquí puedes agregar la lógica para realizar la compra
  // Puedes enviar la información al servidor, mostrar un mensaje, etc.
  Swal.fire({
    title: 'Compra realizada',
    text: '¡Gracias por tu compra!',
    icon: 'success',
    confirmButtonText: 'Ok'
  });

  // También puedes redirigir al usuario a otra página después de la compra
  this.router.navigate(['/compra-realizada']);
}

// ... Tu código actual ...

}

