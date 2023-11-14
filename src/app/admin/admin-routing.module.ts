import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCategoriaAdminComponent } from './agregar-categoria-admin/agregar-categoria-admin.component';
import { AdminComponent } from './admin.component';
import { AgregarUsuarioAdminComponent } from './agregar-usuario-admin/agregar-usuario-admin.component';
import { AgregarProductoAdminComponent } from './agregar-producto-admin/agregar-producto-admin.component';
import { AddSupplierAdminComponent } from './add-supplier-admin/add-supplier-admin.component';
import { InventarioComponent } from '../items/inventario/inventario.component';


const routes: Routes = [
  {path: '',component: AgregarUsuarioAdminComponent},

  {path: 'agregarCategoria', component:AgregarCategoriaAdminComponent},
  
  {path: 'agregarusuarioAdmin', component:AgregarUsuarioAdminComponent},

  {path: 'agregarProducto', component:AgregarProductoAdminComponent},

  {path: 'addSupplier', component:AddSupplierAdminComponent},

  {path: 'inventario', component:InventarioComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
