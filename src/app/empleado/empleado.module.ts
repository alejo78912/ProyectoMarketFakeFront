import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarEmpleadoComponent } from './navbar-empleado/navbar-empleado.component';
import { AddProductEmpComponent } from './add-product-emp/add-product-emp.component';
import { AddCategoryEmpComponent } from './add-category-emp/add-category-emp.component';
import { AddSupplierAdminComponent } from '../admin/add-supplier-admin/add-supplier-admin.component';
import { AddSupplierEmpComponent } from './add-supplier-emp/add-supplier-emp.component';


@NgModule({
  declarations: [
    NavbarEmpleadoComponent,
    AddProductEmpComponent,
    AddCategoryEmpComponent,
    AddSupplierEmpComponent,
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    NavbarEmpleadoComponent,
    AddProductEmpComponent,
    AddCategoryEmpComponent,
    AddSupplierEmpComponent,
  ]
})
export class EmpleadoModule { }
