import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductosService } from '../product.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  productos: Product[] = [];

  constructor(private ProductosService: ProductosService) { }



  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.ProductosService.getAllProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  
}
