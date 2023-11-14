import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryEmpComponent } from './add-category-emp/add-category-emp.component';
import { AddSupplierEmpComponent } from './add-supplier-emp/add-supplier-emp.component';
import { AddProductEmpComponent } from './add-product-emp/add-product-emp.component';

const routes: Routes = [

  {path: '',component: AddCategoryEmpComponent},

  {path: 'agregarCategoria', component:AddCategoryEmpComponent},
  
  {path: 'agregarusuarioAdmin', component:AddSupplierEmpComponent},

  {path: 'agregarProducto', component:AddProductEmpComponent},

  {path: 'addSupplier', component:AddSupplierEmpComponent},

  {path: 'inventario'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
