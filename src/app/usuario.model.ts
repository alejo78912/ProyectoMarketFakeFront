export class Usuario {
    
	cedulaUsuario: number;
	nombreUsuario: string;
    apellidoUsuario: string;
    emailUsuario: string;
	constrasenia: string;
	tipo_usuario: string;
	telefonoUsuario:string;

	constructor(cedulaUsuario: number,nombreUsuario: string,apellidoUsuario: string,emailUsuario: string,constrasenia: string,telefonoUsuario:string, tipo_usuario:string){
	this.cedulaUsuario=  cedulaUsuario;
	this.nombreUsuario= nombreUsuario;
    this.apellidoUsuario= apellidoUsuario;
    this.emailUsuario= emailUsuario;
	this.constrasenia= constrasenia;
	this.telefonoUsuario= telefonoUsuario;
	this.tipo_usuario = tipo_usuario;

	}
}
