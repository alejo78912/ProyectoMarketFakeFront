export class Usuario {
    
	idUser: number;
	name: string;
    lastname: string;
    email: string;
	password: string;
	userType: string;
	phoneNumber:string;

	constructor(idUser: number,name: string,lastname: string,
		email: string,password: string,phoneNumber:string, userType:string){
	this.idUser=  idUser;
	this.name= name;
    this.lastname= lastname;
    this.email= email;
	this.password= password;
	this.phoneNumber= phoneNumber;
	this.userType = userType;

	}
}
