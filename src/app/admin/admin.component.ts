import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {


  cedulaUsuario: number=0;
	nombreUsuario: string="";
  apellidoUsuario: string="";
  emailUsuario: string="";
	constrasenia: string="";
	telefonoUsuario:string="";



  cedulaUsuario1 = 0;
  nombreUsuario1 = '';
  apellidoUsuario1 = '';
  emailUsuario1 = '';
  constrasenia1 = '';
  telefonoUsuario1 = '';

  fillForm(){
    this.cedulaUsuario1 = this.cedulaUsuario;
    this.nombreUsuario1 = ' '+this.nombreUsuario;
    this.apellidoUsuario1 = ' '+this.apellidoUsuario;
    this.emailUsuario1 = ' '+this.emailUsuario;
    this.constrasenia1 = ' '+this.constrasenia;
    this.telefonoUsuario1 = this.telefonoUsuario;
    this.cedulaUsuario = 0;
    this.nombreUsuario = '';
    this.apellidoUsuario = '';
    this.emailUsuario = '';
    this.constrasenia = '';
    this.telefonoUsuario = '';
  }

}
