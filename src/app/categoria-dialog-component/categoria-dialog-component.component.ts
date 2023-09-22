import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-categoria-dialog-component',
  templateUrl: './categoria-dialog-component.component.html',
  styleUrls: ['./categoria-dialog-component.component.css']
})
export class CategoriaDialogComponentComponent {

  categoriaId: number = 0;

  constructor(public dialogRef: MatDialogRef<CategoriaDialogComponentComponent>) {}

  onSubmit(): void {
    // Devuelve el valor del ID de la categoría al componente padre
    this.dialogRef.close(this.categoriaId);
  }

  onCancel(): void {
    // Cierra la ventana emergente sin devolver ningún valor
    this.dialogRef.close();
  }
}
