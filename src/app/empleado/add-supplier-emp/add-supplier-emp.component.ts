import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/product.model';
import { SupplierServiceService } from 'src/app/supplier-service.service';
import { Supplier } from 'src/app/supplier.model';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-add-supplier-emp',
  templateUrl: './add-supplier-emp.component.html',
  styleUrls: ['./add-supplier-emp.component.css']
})
export class AddSupplierEmpComponent implements OnInit{
  suppliers: Supplier[] = [];
  supplier: Supplier = new Supplier(); // Inicializa el modelo

  constructor( private supplierService: SupplierServiceService) {}


  ngOnInit(): void {
    this.supplierService.suppliers().subscribe(data => {
      this.suppliers = data;
      this.supplier.addressSupplier =""
      this.supplier.emailSupplier=""
      this.supplier.idSupplier=0
      this.supplier.nameSupplier=""
      this.supplier.phoneNumberSupplier=""
      this.supplier.urlSupplier=""
    });
  }

  checkProductsInSupplier(idSupplier: number): Observable<boolean> {
    return this.supplierService.getProductosBySupplier(idSupplier).pipe(
      map((products: Product[]) => products.length > 0) // Devuelve true si hay productos, false si no los hay
    );
  }
  
  addSupplier(): void {
   
      this.supplierService.addSupplier(this.supplier).subscribe((data) => {
        this.ngOnInit();
        
      });

      SwalUtils.customMessageOk('Proveedor Agregado','Base de datos actualizada'); 
      
    }


    supplierUpdate(): void {
   
      this.supplierService.updateSupplier(this.supplier).subscribe((data) => {
        this.ngOnInit();
        
      });

      SwalUtils.customMessageOk('Proveedor Editado','Base de datos actualizada'); 

    }

    supplierDelete(): void {
      this.checkProductsInSupplier(this.supplier.idSupplier).subscribe(
        hasProducts => {
          if (hasProducts) {
            SwalUtils.customMessageError('No se puede eliminar', 'El proveedor tiene productos asociados.');
          } else {
            this.supplierService.deleteSupplier(this.supplier.idSupplier).subscribe(
              (data) => {
                this.ngOnInit(); // Esto es opcional, dependiendo de cómo quieras manejar la actualización de la lista de proveedores.
    
                SwalUtils.customMessageOk('Proveedor Eliminado', 'Base de datos actualizada');
              },
              error => {
                SwalUtils.customMessageError('No se puede borrar el proveedor', 'revisa si tienes articulos de este proveedor');
              }
            );
          }
        },
        error => {
          console.error('Error al verificar productos en el proveedor', error);
          // Maneja errores si es necesario
        }
      );
    }
}
