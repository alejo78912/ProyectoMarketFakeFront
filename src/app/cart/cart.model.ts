import { Product } from "../product.model";
import { User } from "../user.model";

export class Cart {
    idCart: number;
    user: User;
    product: Product;
    totalQuantity: number;



    constructor(idCart : number, user : User, product:Product, totalQuantity :number){
        this.idCart = idCart;
        this.user = user;
        this.product = product;
        this.totalQuantity =totalQuantity

    }
}