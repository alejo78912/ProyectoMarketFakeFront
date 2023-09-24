import { Component, OnInit  } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../product.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  productos: Product[] = [];

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.productos().subscribe(data => {
      this.productos = data;
    });
  }
}
