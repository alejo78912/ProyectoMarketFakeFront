import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Agrega esta importación
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { ArticulosMasVendidosComponent } from './items/articulos-mas-vendidos/articulos-mas-vendidos.component';
import { IniciarSesionComponent } from './inciar-sesion/inciar-sesion.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { InventarioComponent } from './items/inventario/inventario.component';
import { AdminComponent } from './admin/admin.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InformeComponent } from './informe/informe.component';
import { VentaComponent } from './venta/venta.component';
import { DetalleProductoComponent } from './items/detalle-producto/detalle-producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarSesionService } from '././iniciar-sesion.service';
import { AgregarUsuarioAdminComponent } from './admin/agregar-usuario-admin/agregar-usuario-admin.component';
import { AgregarProductoAdminComponent } from './admin/agregar-producto-admin/agregar-producto-admin.component';
import { AgregarCategoriaAdminComponent } from './admin/agregar-categoria-admin/agregar-categoria-admin.component';
import { NavBarAdminComponent } from './admin/nav-bar-admin/nav-bar-admin.component';
import { ListByCategoryComponent } from './items/list-by-category/list-by-category.component';
import { AddSupplierAdminComponent } from './admin/add-supplier-admin/add-supplier-admin.component';
import { CategoriaDialogComponentComponent } from './items/categoria-dialog-component/categoria-dialog-component.component';
import { ProductDialogComponentComponent } from './product-dialog-component/product-dialog-component.component';
import { UserDialogComponentComponent } from './user-dialog-component/user-dialog-component.component';
import { SupplierDialogComponentComponent } from './supplier-dialog-component/supplier-dialog-component.component';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { ItemsModule } from './items/items.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IniciarSesionComponent,
    UsuarioComponent,
    EmpleadoComponent,
    CarritoComponent,
    InformeComponent,
    VentaComponent,
    InicioComponent,
    NavbarComponent,
    RegistrarseComponent,
    ContactoComponent,
    ProductDialogComponentComponent,
    UserDialogComponentComponent,
    SupplierDialogComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AdminModule,
    ItemsModule


  ],
  providers: [ IniciarSesionService,
                UsuarioComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
