import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AdminComponent } from './admin/admin.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InciarSesionComponent } from './inciar-sesion/inciar-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InformeComponent } from './informe/informe.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentaComponent } from './venta/venta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UsuarioComponent } from './usuario/usuario.component';

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
  exports: [RouterModule]
})
export class AppRoutingModule { }
