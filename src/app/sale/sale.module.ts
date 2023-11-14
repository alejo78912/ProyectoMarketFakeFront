import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale/sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SaleComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SaleModule { }
