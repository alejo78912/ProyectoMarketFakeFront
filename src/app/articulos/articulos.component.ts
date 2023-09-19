import { Component, OnInit  } from '@angular/core';
import { Product } from '../product.model';
import { ProductosService } from '../product.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit{
  productos: Product[] = [];

  constructor(private ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.ProductosService.productos().subscribe(data => {
      this.productos = data;
    });
  }
}
