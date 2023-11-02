import { Component } from '@angular/core';
import { IniciarSesionService, LoginResponse } from '../iniciar-sesion.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: IniciarSesionService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response: LoginResponse) => {
        if (response && response.view) {
          SwalUtils.customMessageOk(response.message, "Bienvenido");
          this.redirectToView(response.view);
        } else {
          this.handleLoginError();
        }
      },
      (error) => {
        this.handleServerError(error);
      }
    );
  }

  redirectToView(view: string) {
    const routes: { [key: string]: string } = {
      'clienteView': '/articulos',
      'empleadoView': '/empleado',
      'adminView': '/admin',
      'loginPage': '/login'
    };

    const route = routes[view] || '/error'; // Redirige a '/error' si la vista no está definida en las rutas
    this.router.navigate([route]);
  }

  handleLoginError() {
    SwalUtils.customMessageError("Credenciales incorrectas", "UPS");
  }

  handleServerError(error: any) {
    console.error('Error en la solicitud:', error);
    let errorMessage = "Ocurrió un error al procesar la solicitud";
    if (error && error.error && error.error.message) {
      errorMessage = error.error.message;
    }
    SwalUtils.customMessageError(errorMessage, "UPS");
  }
}
