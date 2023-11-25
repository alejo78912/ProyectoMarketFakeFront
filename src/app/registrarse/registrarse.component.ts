import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AgregarUsuarioAdminService } from '../agregar-usuario-admin.service';
import { SwalUtils } from '../utils/swal-utils';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  usuario: User = { idUser: 0,
    name: "",
    lastname: "",
    email: "",
    password: "",
    userType: "Cliente",
    phoneNumber: "",
  address:""}; // Inicializa el modelo

  constructor(private AgregarUsuarioAdminService : AgregarUsuarioAdminService, private router : Router) {}


  addUsuario(): void {
    if (
      this.usuario.idUser &&
      this.usuario.name &&
      this.usuario.lastname &&
      this.usuario.email &&
      this.usuario.password &&
      this.usuario.phoneNumber
    ) {
      this.AgregarUsuarioAdminService.addUsuario(this.usuario).subscribe((data) => {
      });

      this.vaciarCampos();

      Swal.fire({
        title: 'Se ha registrado con exito',
        icon: 'success',
        confirmButtonText: 'Ir al login',
        
      }).then((result) => {
        if (result.isConfirmed) {
          // Navegar a la sección de artículos al hacer clic en el botón de confirmación
          this.router.navigate(['/login']);
        }
      }); 
    }else {
      SwalUtils.customMessageError("Ups", "Todos los campos son obligatorios");
    // Puedes agregar lógica para mostrar un mensaje de error al usuario si lo deseas
  }
    }


    goBack(){
      this.router.navigate([''])
    }
    
    vaciarCampos():void{

      this.usuario.idUser= 0,
      this.usuario.name= "",
      this.usuario.lastname= "",
      this.usuario.email= "",
      this.usuario.password= "",
      this.usuario.phoneNumber= ""
      
    
    }
}
