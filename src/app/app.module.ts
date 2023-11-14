import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Agrega esta importación
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InformeComponent } from './informe/informe.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarSesionService } from '././iniciar-sesion.service';
import { UserDialogComponentComponent } from './user-dialog-component/user-dialog-component.component';
import { SupplierDialogComponentComponent } from './supplier-dialog-component/supplier-dialog-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { ItemsModule } from './items/items.module';
import { SearchModule } from './search/search.module';
import { LogInModule } from './log-in/log-in.module';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';
import { RestrictedComponent } from './restricted/restricted.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UsuarioComponent,
    EmpleadoComponent,
    InformeComponent,
    InicioComponent,
    RegistrarseComponent,
    ContactoComponent,
    UserDialogComponentComponent,
    SupplierDialogComponentComponent,
    RestrictedComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AdminModule,
    ItemsModule,
    SearchModule,
    LogInModule,
    HeaderModule,
    NavbarModule
  ],
  providers: [ IniciarSesionService,
                UsuarioComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
