import { Component, OnInit } from '@angular/core';
import { Category } from '../../category.model';
import { CategoriaService } from '../../category.service';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { CategoriasListarService } from 'src/app/categorias-listar.service';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-agregar-categoria-admin',
  templateUrl: './agregar-categoria-admin.component.html',
  styleUrls: ['./agregar-categoria-admin.component.css']
})
export class AgregarCategoriaAdminComponent implements OnInit{
  categorias: Category[] = [];
  categoria: Category = {
    categoryName: "",
    idCategory: 0
  }; // Inicializa el modelo

  constructor(private CategoriaServicio: CategoriaService, private CategoriaListarService: CategoriasListarService) {}

  addCategoria(): void {
      
      this.CategoriaServicio.addCategoria(this.categoria).subscribe((data) => {
        this.ngOnInit();
        this.categoria.categoryName="";
        
      });

      SwalUtils.customMessageOk('Categoria Agregada','Base de datos actualizada');

    }

    ngOnInit(): void {
      this.CategoriaServicio.categorias().subscribe(data => {
        this.categorias = data;
      });
    }

    
    categoryUpdate(): void {
   
      this.CategoriaServicio.updateCategory(this.categoria).subscribe((data) => {
        this.ngOnInit();
        
      });

      SwalUtils.customMessageOk('Categoria Editado','Base de datos actualizada') ;

    }

    
  checkProductsInCategory(idCategory: number): Observable<boolean> {
    return this.CategoriaListarService.getProductosByCategoria(idCategory).pipe(
      map((products: Product[]) => products.length > 0) // Devuelve true si hay productos, false si no los hay
    );
  }

    categoryDelete(): void {
      this.checkProductsInCategory(this.categoria.idCategory).subscribe(
        hasProducts => {
          if (hasProducts) {
            SwalUtils.customMessageError('No se puede eliminar', 'La categoría tiene productos asociados.');
          } else {
            this.CategoriaServicio.deleteCategory(this.categoria.idCategory).subscribe(
              (data) => {
                this.ngOnInit(); // Esto es opcional, dependiendo de cómo quieras manejar la actualización de la lista de categorías.
    
                SwalUtils.customMessageOk('Categoría Eliminada', 'Base de datos actualizada');
              },
              error => {
                console.error('Error al eliminar la categoría', error);
                // Maneja errores si es necesario
              }
            );
          }
        },
        error => {
          console.error('Error al verificar productos en la categoría', error);
          // Maneja errores si es necesario
        }
      );
    }
    
    

    vaciarCampos():void{

      this.categoria.categoryName= "";
      this.categoria.idCategory= 0;
      
      
    
    }
  
   
}
