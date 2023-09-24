import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { AgregarUsuarioAdminService } from '../../agregar-usuario-admin.service';
import { UserService } from '../../user.service';

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
    phoneNumber: ""}; // Inicializa el modelo

  constructor(private AgregarUsuarioAdminService : AgregarUsuarioAdminService, private userService: UserService, private UsuarioServiceListar: UserService) {}


  ngOnInit(): void {
    this.UsuarioServiceListar.usuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  addUsuario(): void {
   
      this.AgregarUsuarioAdminService.addUsuario(this.usuario).subscribe((data) => {
        this.ngOnInit();
        
      });
    }


    usuarioUpdate(): void {
   
      this.userService.updateUsuario(this.usuario).subscribe((data) => {
        this.ngOnInit();
        
      });
    }

    usuarioDelete(): void {
   
      this.userService.deleteUsuario(this.usuario.idUser).subscribe((data) => {
        this.ngOnInit();
        
      });
    }

    
  
}
