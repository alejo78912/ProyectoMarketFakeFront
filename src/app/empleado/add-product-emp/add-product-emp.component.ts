import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/category.model';
import { CategoriaService } from 'src/app/category.service';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/product.service';
import { SupplierServiceService } from 'src/app/supplier-service.service';
import { Supplier } from 'src/app/supplier.model';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-add-product-emp',
  templateUrl: './add-product-emp.component.html',
  styleUrls: ['./add-product-emp.component.css']
})
export class AddProductEmpComponent implements OnInit{
  selectedFile: File | null = null;
  errorMessage!: string;
  categorias :Category[]=[];
  suppliers: Supplier[] = [];
  
  Produto: Product = { 
    
    idProduct: 0,
    price: 0,
    url_photo: "aa",
    quantityToSell: 0,
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
    applyShipping:true, 
    shippingValue:0
    }; // Inicializa el modelo

    apiResponse :any = {
      "url": ""
    };
    
    constructor(private productoServicio: ProductsService, private fb: FormBuilder, private CategoriaServicio: CategoriaService, private supplierService : SupplierServiceService) {
    
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
   
      this.productoServicio.addProduct(this.Produto).subscribe((data) => {
       console.log(data.category.idCategory)
        this.Produto.idProduct = 0;
        this.Produto.price = 0;
        this.Produto.applyShipping=true;
        this.Produto.shippingValue=0;
        this.Produto.url_photo = "";
        this.Produto.quantityToSell = 0;
        this.Produto.category = {
          idCategory: 0,
          categoryName: ""
        };
        this.Produto.productName = "";
        this.Produto.productDescription = "";
        
      });
      console.log(this.Produto);
      
      SwalUtils.customMessageOk('Articulo Agregado','Inventario actualizado'); 

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
    
  
  }


    
    ProductUpdate(): void {
   
      this.productoServicio.updateProduct(this.Produto).subscribe((data) => {
      this.vaciarCampos();
        
      });

      SwalUtils.customMessageOk('aProducto Editado','Base de datos actualizada'); 

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
            
            // Ahora puedes llamar a la función para agregar el producto
            this.addProduct();
          },
          (error) => {
            console.log(error);
            
            SwalUtils.customMessageError('Error al subir la imagen:', error);
          }
        );
      } else {
        SwalUtils.customMessageError('No se ha seleccionado','ningún archivo de imagen.' );
      }
    }
}
