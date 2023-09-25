import { Component, OnInit } from '@angular/core';
import { Category } from '../../category.model';
import { CategoriaService } from '../../category.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoriaDialogComponentComponent } from '../../items/categoria-dialog-component/categoria-dialog-component.component'; // Asegúrate de crear este componente
import { SwalUtils } from 'src/app/utils/swal-utils';
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

  constructor(private CategoriaServicio: CategoriaService, private dialog: MatDialog) {}

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

    categoryDelete(): void {
   
      this.CategoriaServicio.deleteCategory(this.categoria.idCategory).subscribe((data) => {
        this.ngOnInit();
        
      });

      SwalUtils.customMessageOk('Categoria Eliminada','Base de datos actualizada') ;

    }

    openCategoriaDialog(): void {
      const dialogConfig = new MatDialogConfig();
  
      // Puedes configurar propiedades de la ventana emergente aquí, como su tamaño, posición, etc.
      dialogConfig.width = '400px';
  
      // Abre la ventana emergente
      const dialogRef = this.dialog.open(CategoriaDialogComponentComponent, dialogConfig);
  
      // Maneja el resultado de la ventana emergente
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Aquí puedes procesar el ID de la categoría ingresado en la ventana emergente
          console.log('ID de categoría ingresado:', result);
        }
      });
    }

    vaciarCampos():void{

      this.categoria.categoryName= "";
      this.categoria.idCategory= 0;
      
      
    
    }
  
   
}
