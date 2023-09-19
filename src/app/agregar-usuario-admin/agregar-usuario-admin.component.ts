import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AgregarUsuarioAdminService } from '../agregar-usuario-admin.service';
import { UserService } from '../user.service';

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

  constructor(private usuarioservice: AgregarUsuarioAdminService, private UsuarioServiceListar: UserService) {}


  ngOnInit(): void {
    this.UsuarioServiceListar.usuarios().subscribe(data => {
      this.usuarios = data;
    });
  }
  addUsuario(): void {
   
      this.usuarioservice.addUsuario(this.usuario).subscribe((data) => {
        this.ngOnInit();
        
      });
    }

    
  
}
