import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{

  idProduct: number = 0;
  product!: Product ; // Ajusta el tipo de datos según la estructura de tus productos
isEditable: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idProduct = +params['idProduct']; // Obtén el ID del producto desde la ruta
      this.loadProductDetails();
    });
  }

  loadProductDetails() {
    this.productService.getProductById(this.idProduct).subscribe(data => {
      this.product = data;
    });
  }

  getQuantityOptions(maxQuantity: number): number[] {
    return Array.from({ length: maxQuantity }, (_, index) => index + 1);
  }

  optionRange(maxValue: number): number[] {
    const options: number[] = [];
    for (let i = 1; i <= maxValue; i++) {
      options.push(i);
    }
    return options;
  }
}



