import { Component } from '@angular/core';
import { Producto } from '../producto.model';
import { ProductosService } from './../productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  productos: Producto[] = [];

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
