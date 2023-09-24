import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AgregarCategoriaAdminComponent } from './agregar-categoria-admin/agregar-categoria-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { AgregarProductoAdminComponent } from './agregar-producto-admin/agregar-producto-admin.component';
import { AgregarUsuarioAdminComponent } from './agregar-usuario-admin/agregar-usuario-admin.component';
import { AddSupplierAdminComponent } from './add-supplier-admin/add-supplier-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AgregarCategoriaAdminComponent,
    NavBarAdminComponent,
    AgregarProductoAdminComponent,
    AgregarUsuarioAdminComponent,
    AddSupplierAdminComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    AdminComponent,
    AgregarCategoriaAdminComponent,
    NavBarAdminComponent,
    AgregarProductoAdminComponent,
    AgregarUsuarioAdminComponent,
    AddSupplierAdminComponent

  ]
})
export class AdminModule { }
