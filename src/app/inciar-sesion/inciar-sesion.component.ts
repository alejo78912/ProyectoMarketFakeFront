import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsuarioComponent } from '../usuario/usuario.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IniciarSesionService } from './../iniciar-sesion.service';
import { RespuestaInicioSesion } from './../iniciar-sesion.service'; // Importa la interfaz desde el servicio






@Component({
  selector: 'app-inciar-sesion',
  templateUrl: './inciar-sesion.component.html',
  styleUrls: ['./inciar-sesion.component.css']
})



export class IniciarSesionComponent  {
  correo: string = "";
  contrasena: string= "";
  usuario: UsuarioComponent = new UsuarioComponent();

  constructor(private IniciarSesionService: IniciarSesionService) {}

  iniciarSesion() {
    this.IniciarSesionService.login(this.correo, this.contrasena).subscribe(
      (response) => {
        // Manejar la respuesta del servidor aquí
        const tipoUsuario = response.tipoUsuario;
        // Puedes redirigir a la página correspondiente según el tipo de usuario
        if (tipoUsuario === 'cliente') {
          // Redirigir a la página de cliente
        } else if (tipoUsuario === 'empleado') {
          // Redirigir a la página de empleado
        } else if (tipoUsuario === 'admin') {
          // Redirigir a la página de administrador
        }
      },
      (error) => {
        // Manejar errores de autenticación aquí
      }
    );
  }
}


  

  
