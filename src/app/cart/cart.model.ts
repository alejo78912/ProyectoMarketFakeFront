import { Product } from "../product.model";
import { User } from "../user.model";

export class Cart {
    idCart: number;
    user: User;
    product: Product;


    constructor(idCart : number, user : User, product:Product){
        this.idCart = idCart;
        this.user = user;
        this.product = product;

    }
}