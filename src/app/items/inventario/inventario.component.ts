import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../../product.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  productos: Product[] = [];

  constructor(private ProductsService: ProductsService) { }



  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.ProductsService.getAllProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  
}
