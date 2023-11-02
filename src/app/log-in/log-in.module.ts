import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LogInComponent
  ]
})
export class LogInModule { }
