import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { Cart } from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{


  
  idProduct: number = 0;
  product!: Product ; // Ajusta el tipo de datos según la estructura de tus productos
isEditable: any;


productos: Product[] = [];
cart : Cart ={
  idCart :   0,
  user : {
    idUser: 0,
    name: "",
    lastname: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: "",
    address:""
  },
  product :{
    idProduct: 0,
    price: 0,
    url_photo: "aa",
    quantityToSell: 0,
    category: {
      idCategory: 0,
      categoryName: ''
    },
    supplier: {
      idSupplier: 0,
      nameSupplier: "",
      addressSupplier: "",
      phoneNumberSupplier: "",
      emailSupplier: "",
      urlSupplier: ""
    },
    productName: "",
    productDescription: "",
    applyShipping:true, shippingValue:0
  },
  totalQuantity:0
}

private id: string | null = localStorage.getItem('idUser');

ced: number = this.id ? parseInt(this.id, 10) : 0;

  constructor(private route: ActivatedRoute, private productService: ProductsService,private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idProduct = +params['idProduct']; // Obtén el ID del producto desde la ruta
      this.loadProductDetails();
    });
  }

  loadProductDetails() {
    this.productService.getProductById(this.idProduct).subscribe(data => {
      this.product = data;
    });
  }

  getQuantityOptions(maxQuantity: number): number[] {
    return Array.from({ length: maxQuantity }, (_, index) => index + 1);
  }

  optionRange(maxValue: number): number[] {
    const options: number[] = [];
    for (let i = 1; i <= maxValue; i++) {
      options.push(i);
    }
    return options;
  }

  agregarProductoAlCarrito(idProducto: number): void {
    // Set the idProduct in the cart object
    
  
    this.cartService.checkProductInCart(this.ced, idProducto).subscribe(
      productoEnCarrito => {
        if (productoEnCarrito === "isProductInCart") {
          SwalUtils.customMessageError('El producto ya está en el carrito.','agregue otro');
        } else {

          this.cart.product.idProduct = idProducto;
  
  
          this.cart.user.idUser = this.ced;
          this.cartService.agregarProductoAlCarrito(this.cart).subscribe(
            (response) => {
              SwalUtils.customMessageOk('El producto se agregó con éxito.','sigue comprando');
              
              console.log('idUser:',  this.cart.user.idUser);
              console.log('idProduct:', this.cart.product.idProduct);

            },
            error => {
              console.error('Error al agregar el producto al carrito', error);
              // Handle errors if necessary
            }
          );
        }
      },
      error => {
        console.error('Error al verificar el producto en el carrito', error);
        // Handle errors if necessary
      }
    );
}

}

