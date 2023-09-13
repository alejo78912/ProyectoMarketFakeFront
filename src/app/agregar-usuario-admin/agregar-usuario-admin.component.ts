import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { AgregarUsuarioAdminService } from '../agregar-usuario-admin.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-agregar-usuario-admin',
  templateUrl: './agregar-usuario-admin.component.html',
  styleUrls: ['./agregar-usuario-admin.component.css']
})
export class AgregarUsuarioAdminComponent implements OnInit{
  usuarios: Usuario[] = [];
  usuario: Usuario = { cedulaUsuario: 0,
    nombreUsuario: "",
    apellidoUsuario: "",
    emailUsuario: "",
    constrasenia: "",
    tipoUsuario: "",
    telefonoUsuario: ""}; // Inicializa el modelo

  constructor(private usuarioservice: AgregarUsuarioAdminService, private UsuarioServiceListar: UsuarioService) {}


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
