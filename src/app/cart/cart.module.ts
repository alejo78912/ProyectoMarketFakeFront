import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { SaleModule } from '../sale/sale.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    SaleModule
  ],
  exports:[
    CartComponent
  ]
})
export class CartModule { }
