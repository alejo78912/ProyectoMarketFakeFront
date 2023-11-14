import { User } from "../user.model";

export class Sale {
    
	idSale!: number;
	price!: number;
    address!: string;
    phoneNumber!: string;
	user!:User;
	
}