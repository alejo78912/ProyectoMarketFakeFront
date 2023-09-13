import { Component, OnInit  } from '@angular/core';
import { Producto } from './../producto.model';
import { ProductosService } from './../productos.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit{
  productos: Producto[] = [];

  constructor(private ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.ProductosService.productos().subscribe(data => {
      this.productos = data;
    });
  }
}
