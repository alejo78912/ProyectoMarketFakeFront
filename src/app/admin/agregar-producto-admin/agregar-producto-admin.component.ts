import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../../product.service';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/category.service';
import { Category } from 'src/app/category.model';
import { Supplier } from 'src/app/supplier.model';
import { SupplierServiceService } from 'src/app/supplier-service.service';

@Component({
  selector: 'app-agregar-producto-admin',
  templateUrl: './agregar-producto-admin.component.html',
  styleUrls: ['./agregar-producto-admin.component.css']
})
export class AgregarProductoAdminComponent implements OnInit{
  selectedFile: File | null = null;
  errorMessage!: string;
  categorias :Category[]=[];
  suppliers: Supplier[] = [];
  
  Produto: Product = { 
    
    idProduct: 0,
    price: 0,
    url_photo: "aa",
    quantityToSell: 0,
    applyShipping:false, 
    shippingValue:0,
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

    apiResponse :any = {
      "url": ""
    };

    
   
    
    constructor(private productoServicio: ProductsService, private fb: FormBuilder, private CategoriaServicio: CategoriaService, private supplierService : SupplierServiceService, ) {
      
      
      
      
    }
  ngOnInit(): void {
    this.CategoriaServicio.categorias().subscribe(data => {
      this.categorias = data;
    });

    this.supplierService.suppliers().subscribe(data => {
      this.suppliers = data;
     
    });
  }
  
  addProduct(): void {
   if(this.Produto.quantityToSell<300){
      this.productoServicio.addProduct(this.Produto).subscribe((data) => {
       console.log(data.category.idCategory)
       console.log(data.shippingValue)
       this.Produto.shippingValue = 0;
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
      console.log(this.Produto.shippingValue);
      
      SwalUtils.customMessageOk('Articulo Agregado','Inventario actualizado'); 
    }else{
      SwalUtils.customMessageError('La cantidad no es valida','Verifique que sea menor a 300'); 
    }
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
    this.Produto.shippingValue =0 
    this.Produto.applyShipping =false
    
  
  }


    
    ProductUpdate(): void {
   
      this.productoServicio.updateProduct(this.Produto).subscribe((data) => {
      this.vaciarCampos();
        
      });

      SwalUtils.customMessageOk('Producto Editado','Base de datos actualizada'); 

    }

    ProductDelete(): void {
   
      this.productoServicio.deleteProduct(this.Produto.idProduct).subscribe((data) => {
      this.vaciarCampos();
        
      });

      SwalUtils.customMessageOk('Producto Eliminado','Base de datos actualizada'); 

    }

    onFileSelected(event: Event): void {
      const inputElement = (event.target as HTMLInputElement)?.files?.[0] as File | null;
  
      if (inputElement) {
        
        this.productoServicio.uploadImage(inputElement).subscribe(
          
          (res) => {
            console.log("URL =>", res);
            this.apiResponse = res
            
            SwalUtils.customMessageOk('Imagen subida correctamente:', res);
            
            this.Produto.url_photo = this.apiResponse.url; // Asigna la URL al objeto Producto
            console.log(res);
            
          },
          (error) => {

            console.log(inputElement)
            SwalUtils.customMessageError('Error al subir la imagen:', error);
          }
        );

       
      
    }
   
  }
  
    validateImageSize(control: AbstractControl) {
      const file = control.value;
      if (file) {
        const fileSize = file.size / 1024 / 1024; // Tamaño en MB
        if (fileSize > 15) {
          return { imageSizeError: true };
        }
      }
      return null;
    }
  
    onFileChange(event: Event) {
      const inputElement = (event.target as HTMLInputElement)?.files?.[0] as File | null;
    
      if (inputElement) {
        // Acciones con el archivo, por ejemplo, validar el tamaño y realizar la carga.
        const file = inputElement;
        // Resto del código...
      }
    }
    
    onSubmit(): void {
      if (this.selectedFile) {
        this.productoServicio.uploadImage(this.selectedFile).subscribe(
          (res) => {
            console.log(res);
            this.Produto.url_photo = res; // Asigna la URL al atributo url_photo de Produto
            this.addOrUpdateProduct();
          },
          (error) => {
            console.log(error);
            SwalUtils.customMessageError('Error al subir la imagen:', error);
          }
        );
      } else {
        // Si no se ha seleccionado ningún archivo de imagen, llama directamente a la función para agregar o actualizar el producto
        this.addOrUpdateProduct();
      }

    
    }
    
    private addOrUpdateProduct(): void {
      // Asigna el valor de ShippingValue si applyShipping es true
    
      if (this.Produto.idProduct) {
        this.ProductUpdate(); // Llama a la función para actualizar el producto
      } else {
        this.addProduct(); // Llama a la función para agregar el producto
      }
    
      // Limpiar valores después de la operación (ajusta esto según tus necesidades)
      this.selectedFile = null;
      this.Produto.url_photo = '';
    }
    
    
    
}
