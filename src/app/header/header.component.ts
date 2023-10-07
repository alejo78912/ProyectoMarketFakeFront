import { Component } from '@angular/core';
import { Category } from '../category.model';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../category.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  url="https://icon-library.com/images/retailer-icon/retailer-icon-8.jpg"
  LOGO = "https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg";

  categorias: Category[] =[];

  constructor(private route: ActivatedRoute,private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    
    this.getCategorias();
}

  getCategorias() {
   
    this.categoriaService.categorias().subscribe(data => {
      this.categorias = data;

  });
  }

}
