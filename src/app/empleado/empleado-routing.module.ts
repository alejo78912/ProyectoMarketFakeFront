import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryEmpComponent } from './add-category-emp/add-category-emp.component';
import { AddSupplierEmpComponent } from './add-supplier-emp/add-supplier-emp.component';
import { AddProductEmpComponent } from './add-product-emp/add-product-emp.component';

const routes: Routes = [

  {path: '',component: AddCategoryEmpComponent},

  {path: 'agregarCategoriaEmp', component:AddCategoryEmpComponent},

  {path: 'agregarProductoEmp', component:AddProductEmpComponent},

  {path: 'addSupplierEmp', component:AddSupplierEmpComponent},

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
