import { Component, OnInit  } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../product.service';
import { SwalUtils } from '../utils/swal-utils';
import { SharedServiceService } from '../shared-service.service';
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';



@Component({
  selector: 'app-articulos',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  productos: Product[] = [];
  auxProducts:Product[] = this.productos;
  filteredProducts:Product[] = [];
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
  busque: string = '';
  private id: string | null = localStorage.getItem('idUser');

  ced: number = this.id ? parseInt(this.id, 10) : 0;


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
