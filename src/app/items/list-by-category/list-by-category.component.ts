import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasListarService } from '../../categorias-listar.service';
import { CategoriaService } from '../../category.service';
import { Product } from '../../product.model';
import { Category} from '../../category.model';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { Cart } from 'src/app/cart/cart.model';
import { CartService } from 'src/app/cart/cart.service';


@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styleUrls: ['./list-by-category.component.css']
})
export class ListByCategoryComponent  implements OnInit{

  idCategoria: number = 0;
  productos: Product[] = [];
  categorias: Category[] =[]; // Ajusta el tipo de datos según la estructura de tus categorías
  categoriaSeleccionada: number = 0;

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
    totalQuantity: 0
  }
  private id: string | null = localStorage.getItem('idUser');

  ced: number = this.id ? parseInt(this.id, 10) : 0;

  constructor(private route: ActivatedRoute, private categoriasListarService: CategoriasListarService, private CategoriaService : CategoriaService, private cartService: CartService) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.idCategoria = params['idCategoria'];
        this.getProductosByCategoria();
      });
      this.getCategorias();
  }

  getProductosByCategoria() {
    this.categoriasListarService.getProductosByCategoria(this.categoriaSeleccionada).subscribe(data => {
      this.productos = data;
    });
  }

  getCategorias() {
   
    this.CategoriaService.categorias().subscribe(data => {
      this.categorias = data;

  });
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
