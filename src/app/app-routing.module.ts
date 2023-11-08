import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ItemsComponent } from './items/items.component';
import { AdminComponent } from './admin/admin.component';
import { DetalleProductoComponent } from './items/detalle-producto/detalle-producto.component';
import { EmpleadoComponent } from './empleado/empleado.component';

import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InformeComponent } from './informe/informe.component';
import { InventarioComponent } from './items/inventario/inventario.component';
import { VentaComponent } from './venta/venta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AgregarCategoriaAdminComponent } from './admin/agregar-categoria-admin/agregar-categoria-admin.component';
import { AgregarUsuarioAdminComponent } from './admin/agregar-usuario-admin/agregar-usuario-admin.component';
import { AgregarProductoAdminComponent } from './admin/agregar-producto-admin/agregar-producto-admin.component';
import { ListByCategoryComponent } from './items/list-by-category/list-by-category.component';
import { AddSupplierAdminComponent } from './admin/add-supplier-admin/add-supplier-admin.component';
import { AdminModule } from './admin/admin.module';
import { CartComponent } from './cart/cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { authGuard } from 'src/auth/auth.guard';
import { Utils } from './utils/utils';
import { RestrictedComponent } from './restricted/restricted.component';

const routes: Routes = [{path : '', component:LogInComponent},

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
{path: 'inicio', component:InicioComponent},
{path: 'articulos', component:ItemsComponent},
{path: 'categorias', component:ListByCategoryComponent},
{path: 'detalle-producto/:idProduct', component:DetalleProductoComponent},
{path: 'empleado', component:EmpleadoComponent},
{path: 'registrar', component:RegistrarseComponent},
{path: 'informe', component:InformeComponent},
{path: 'venta', component:VentaComponent},
{path: 'usuario', component:UsuarioComponent},
{path: 'contacto', component:ContactoComponent},
{path: 'cart', component:CartComponent},
{path: 'login', component:LogInComponent},
{path: 'restricted', component:RestrictedComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
