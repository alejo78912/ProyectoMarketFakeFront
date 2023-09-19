import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasListarService } from '../categorias-listar.service';
import { CategoriaService } from '../category.service';
import { Product } from '../product.model';
import { Category} from '../category.model';

@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styleUrls: ['./list-by-category.component.css']
})
export class ListByCategoryComponent  implements OnInit{

  idCategoria: number = 0;
  productos: Product[] = [];
  categorias: Category[] =[]; // Ajusta el tipo de datos según la estructura de tus categorías
  categoriaSeleccionada: number = 0;

  constructor(private route: ActivatedRoute, private categoriasListarService: CategoriasListarService, private CategoriaService : CategoriaService) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.idCategoria = params['idCategoria'];
        this.getProductosByCategoria();
      });
      this.getCategorias();
  }

  getProductosByCategoria() {
    this.categoriasListarService.getProductosByCategoria(this.categoriaSeleccionada).subscribe(data => {
      this.productos = data;
    });
  }

  getCategorias() {
   
    this.CategoriaService.categorias().subscribe(data => {
      this.categorias = data;

  });
  }

}
