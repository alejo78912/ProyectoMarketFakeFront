import { Component } from '@angular/core';
import { Category } from '../category.model';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
