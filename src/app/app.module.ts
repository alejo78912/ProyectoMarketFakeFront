import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Agrega esta importación
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticulosMasVendidosComponent } from './articulos-mas-vendidos/articulos-mas-vendidos.component';
import { IniciarSesionComponent } from './inciar-sesion/inciar-sesion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InventarioComponent } from './inventario/inventario.component';
import { AdminComponent } from './admin/admin.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InformeComponent } from './informe/informe.component';
import { VentaComponent } from './venta/venta.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarSesionService } from '././iniciar-sesion.service';
import { AgregarUsuarioAdminComponent } from './agregar-usuario-admin/agregar-usuario-admin.component';
import { AgregarProductoAdminComponent } from './agregar-producto-admin/agregar-producto-admin.component';
import { AgregarCategoriaAdminComponent } from './agregar-categoria-admin/agregar-categoria-admin.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticulosComponent,
    ArticulosMasVendidosComponent,
    IniciarSesionComponent,
    UsuarioComponent,
    InventarioComponent,
    AdminComponent,
    EmpleadoComponent,
    CarritoComponent,
    InformeComponent,
    VentaComponent,
    DetalleProductoComponent,
    InicioComponent,
    NavbarComponent,
    RegistrarseComponent,
    ContactoComponent,
    AgregarUsuarioAdminComponent,
    AgregarProductoAdminComponent,
    AgregarCategoriaAdminComponent,
    NavBarAdminComponent,
    ListByCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ IniciarSesionService,
                UsuarioComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
