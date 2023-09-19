import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AdminComponent } from './admin/admin.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { IniciarSesionComponent } from './inciar-sesion/inciar-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InformeComponent } from './informe/informe.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentaComponent } from './venta/venta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductsService } from './product.service';
import { AgregarCategoriaAdminComponent } from './agregar-categoria-admin/agregar-categoria-admin.component';
import { AgregarUsuarioAdminComponent } from './agregar-usuario-admin/agregar-usuario-admin.component';
import { AgregarProductoAdminComponent } from './agregar-producto-admin/agregar-producto-admin.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';

const routes: Routes = [{path : '', component:ArticulosComponent},
{path : 'inicio', component:InicioComponent},
{path: 'carrito', component:CarritoComponent},
{path: 'articulos', component:ArticulosComponent},
{path: 'admin', component:AdminComponent},
{path: 'categorias', component:ListByCategoryComponent},
{path: 'detalle-producto/:idProduct', component:DetalleProductoComponent},
{path: 'empleado', component:EmpleadoComponent},
{path: 'iniciarSesion', component:IniciarSesionComponent},
{path: 'registrar', component:RegistrarseComponent},
{path: 'informe', component:InformeComponent},
{path: 'inventario', component:InventarioComponent},
{path: 'venta', component:VentaComponent},
{path: 'usuario', component:UsuarioComponent},
{path: 'contacto', component:ContactoComponent},
{path: 'agregarCategoria', component:AgregarCategoriaAdminComponent},
{path: 'agregarusuarioAdmin', component:AgregarUsuarioAdminComponent},
{path: 'agregarProducto', component:AgregarProductoAdminComponent}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
