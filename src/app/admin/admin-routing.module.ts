import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCategoriaAdminComponent } from './agregar-categoria-admin/agregar-categoria-admin.component';
import { AdminComponent } from './admin.component';
import { AgregarUsuarioAdminComponent } from './agregar-usuario-admin/agregar-usuario-admin.component';

const routes: Routes = [
  {path: '',component: AgregarUsuarioAdminComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
