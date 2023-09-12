export class Empleado {

    
	cedulaEmpleado: number;
	nombreEmpleado: string;
    apellidoEmpleado: string;
    emailEmpleado: string;
	constrasenia: string;
	telefonoEmpleado:string;
    isAdmin :boolean;

	constructor(cedulaEmpleado: number,nombreEmpleado: string,apellidoEmpleado: string,emailEmpleado: string,constrasenia: string,telefonoEmpleado:string, isAdmin:boolean){
	this.cedulaEmpleado=  cedulaEmpleado;
	this.nombreEmpleado= nombreEmpleado;
    this.apellidoEmpleado= apellidoEmpleado;
    this.emailEmpleado= emailEmpleado;
	this.constrasenia= constrasenia;
	this.telefonoEmpleado= telefonoEmpleado;
    this.isAdmin = isAdmin;

	}
}
