import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../supplier.model';
import { SupplierServiceService } from '../../supplier-service.service';

@Component({
  selector: 'app-add-supplier-admin',
  templateUrl: './add-supplier-admin.component.html',
  styleUrls: ['./add-supplier-admin.component.css']
})
export class AddSupplierAdminComponent implements OnInit{
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
  addSupplier(): void {
   
      this.supplierService.addSupplier(this.supplier).subscribe((data) => {
        this.ngOnInit();
        
      });
    }


    supplierUpdate(): void {
   
      this.supplierService.updateSupplier(this.supplier).subscribe((data) => {
        this.ngOnInit();
        
      });
    }

    supplierDelete(): void {
   
      this.supplierService.deleteSupplier(this.supplier.idSupplier).subscribe((data) => {
        this.ngOnInit();
        
      });
    }

}
