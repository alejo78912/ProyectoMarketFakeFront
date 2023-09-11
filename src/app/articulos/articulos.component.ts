import { Component } from '@angular/core';
import { Producto } from './../producto.model';
import { ProductosService } from './../productos.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {
  productos: Producto[] = [];

  constructor(private ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.ProductosService.productos().subscribe(data => {
      this.productos = data;
    });
  }
}
