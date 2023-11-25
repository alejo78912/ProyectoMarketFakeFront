import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { AgregarUsuarioAdminService } from '../../agregar-usuario-admin.service';
import { UserService } from '../../user.service';
import { SwalUtils } from 'src/app/utils/swal-utils';

@Component({
  selector: 'app-agregar-usuario-admin',
  templateUrl: './agregar-usuario-admin.component.html',
  styleUrls: ['./agregar-usuario-admin.component.css']
})
export class AgregarUsuarioAdminComponent implements OnInit{
  usuarios: User[] = [];
  usuario: User = { idUser: 0,
    name: "",
    lastname: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: "",
  address:""}; // Inicializa el modelo

  constructor(private AgregarUsuarioAdminService : AgregarUsuarioAdminService, private userService: UserService, private UsuarioServiceListar: UserService) {}


  ngOnInit(): void {
    sessionStorage.clear()
    this.UsuarioServiceListar.usuarios().subscribe(data => {
      this.usuarios = data;
    


    });
  }
  addUsuario(): void {
   
      this.AgregarUsuarioAdminService.addUsuario(this.usuario).subscribe((data) => {
        this.ngOnInit();
        
      });

      this.vaciarCampos();

      SwalUtils.customMessageOk('Usuario Registrado Exitosamente','Base de datos actualizada!'); 

    }


    usuarioUpdate(idUser: number): void {
   
      this.userService.updateUsuario(this.usuario).subscribe((data) => {
        this.ngOnInit();
        
        
      });

      SwalUtils.customMessageOk('Usuario Editado','Base de datos actualizada') 

    }

    usuarioDelete(idUser: number): void {
   
      this.userService.deleteUsuario(idUser).subscribe((data) => {
        this.ngOnInit();
        
      });

      SwalUtils.customMessageOk('Usuario Eliminado','Base de datos actualizada'); 

    }

    vaciarCampos():void{

      this.usuario.idUser= 0,
      this.usuario.name= "",
      this.usuario.lastname= "",
      this.usuario.email= "",
      this.usuario.password= "",
      this.usuario.userType= "",
      this.usuario.phoneNumber= ""
      
    
    }

    
  
}
