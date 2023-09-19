import { Component, OnInit  } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../product.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit{
  productos: Product[] = [];

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.productos().subscribe(data => {
      this.productos = data;
    });
  }
}
