import { Component } from '@angular/core';
import { Usuario } from '../usuario.model';
import { AgregarUsuarioAdminService } from '../agregar-usuario-admin.service';

@Component({
  selector: 'app-agregar-usuario-admin',
  templateUrl: './agregar-usuario-admin.component.html',
  styleUrls: ['./agregar-usuario-admin.component.css']
})
export class AgregarUsuarioAdminComponent {

  usuario: Usuario = { cedulaUsuario: 0,
    nombreUsuario: "",
    apellidoUsuario: "",
    emailUsuario: "",
    constrasenia: "",
    tipoUsuario: "",
    telefonoUsuario: ""}; // Inicializa el modelo

  constructor(private usuarioservice: AgregarUsuarioAdminService) {}

  addUsuario(): void {
   
      this.usuarioservice.addUsuario(this.usuario).subscribe((data) => {
        // Puedes realizar acciones adicionales aquí, como actualizar la lista de tareas
        
      });
    }
  
}
