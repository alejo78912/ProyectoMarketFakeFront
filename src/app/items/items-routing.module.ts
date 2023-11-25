import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CartComponent } from '../cart/cart.component';
import { SaleComponent } from '../sale/sale/sale.component';

const routes: Routes = [
  {path: '', component:ItemsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'articulos', component:ItemsComponent},
  {path: 'categorias', component:ListByCategoryComponent},
  {path: 'detalle-producto/:idProduct', component:DetalleProductoComponent},
  {path: 'sale', component:SaleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
