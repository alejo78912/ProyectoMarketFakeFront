import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IniciarSesionService } from './../iniciar-sesion.service';
@Component({
  selector: 'app-inciar-sesion',
  templateUrl: './inciar-sesion.component.html',
  styleUrls: ['./inciar-sesion.component.css']
})
export class InciarSesionComponent {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private IniciarSesionService: IniciarSesionService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.IniciarSesionService.login(username, password).subscribe(
        (response) => {
          // Manejar la respuesta del servidor aquí (redirección, almacenamiento de tokens, etc.)
        },
        (error) => {
          this.errorMessage = 'Autenticación fallida. Verifica tus credenciales.';
        }
      );
    }
  }

}
