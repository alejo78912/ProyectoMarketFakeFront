import { IterableDiffers, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ArticulosMasVendidosComponent } from './articulos-mas-vendidos/articulos-mas-vendidos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaDialogComponentComponent } from './categoria-dialog-component/categoria-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InventarioComponent } from './inventario/inventario.component';


@NgModule({
  declarations: [
    ItemsComponent,
    ArticulosMasVendidosComponent,
    DetalleProductoComponent,
    ListByCategoryComponent,
    CategoriaDialogComponentComponent,
    InventarioComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,
    MatFormFieldModule,
  ],
  exports : [
    ItemsComponent,
    ArticulosMasVendidosComponent,
    DetalleProductoComponent,
    ListByCategoryComponent,
    CategoriaDialogComponentComponent,
    InventarioComponent
  ]
})
export class ItemsModule { }
