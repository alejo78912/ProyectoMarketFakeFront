import { Category } from './category.model';
import { Supplier } from './supplier.model';

export class Product {
  idProduct: number;
  price: number;
  url_photo: string;
  quantityToSell: number;
  category: Category;
  productName: string;
  productDescription: string;
  supplier: Supplier;
  applyShipping: boolean;
  shippingValue:number;

  constructor(
    idProduct: number,
    price: number,
    url_photo: string,
    quantityToSell: number,
    category: Category,
    supplier: Supplier,
    productName: string,
    productDescription: string,
    applyShipping: boolean,
    shippingValue:number

  ) {
    this.shippingValue = shippingValue;
    this.applyShipping = applyShipping;
    this.idProduct = idProduct;
    this.price = price;
    this.url_photo = url_photo;
    this.quantityToSell = quantityToSell;
    this.category = category;
    this.supplier = supplier
    this.productName = productName;
    this.productDescription = productDescription;
  }
}





