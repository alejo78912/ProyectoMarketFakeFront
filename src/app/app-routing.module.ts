import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './models/inicio/inicio.component';
import { CarritoComponent } from './models/carrito/carrito.component';
import { ArticulosComponent } from './models/articulos/articulos.component';
import { AdminComponent } from './models/admin/admin.component';
import { DetalleProductoComponent } from './models/detalle-producto/detalle-producto.component';
import { EmpleadoComponent } from './models/empleado/empleado.component';
import { InciarSesionComponent } from './models/inciar-sesion/inciar-sesion.component';
import { RegistrarseComponent } from './models/registrarse/registrarse.component';
import { InformeComponent } from './models/informe/informe.component';
import { InventarioComponent } from './models/inventario/inventario.component';
import { VentaComponent } from './models/venta/venta.component';
import { ContactoComponent } from './models/contacto/contacto.component';
import { UsuarioComponent } from './models/usuario/usuario.component';

const routes: Routes = [{path : '', component:InicioComponent},
{path : 'inicio', component:InicioComponent},
{path: 'carrito', component:CarritoComponent},
{path: 'articulos', component:ArticulosComponent},
{path: 'admin', component:AdminComponent},
{path: 'detalle-producto', component:DetalleProductoComponent},
{path: 'empleado', component:EmpleadoComponent},
{path: 'iniciarSesion', component:InciarSesionComponent},
{path: 'registrar', component:RegistrarseComponent},
{path: 'informe', component:InformeComponent},
{path: 'inventario', component:InventarioComponent},
{path: 'venta', component:VentaComponent},
{path: 'usuario', component:UsuarioComponent},
{path: 'contacto', component:ContactoComponent}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
   InicioComponent,
   CarritoComponent,
   ArticulosComponent,
   AdminComponent,
   DetalleProductoComponent,
   EmpleadoComponent,
   InicioComponent,
   RegistrarseComponent,
   InformeComponent,
   InventarioComponent,
   VentaComponent,
   UsuarioComponent,
   ContactoComponent
  ],
})
export class AppRoutingModule { }
