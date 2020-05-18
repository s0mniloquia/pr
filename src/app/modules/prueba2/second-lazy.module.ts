import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLazyRoutingModule } from './second-lazy-routing.module';
import { Prueba2Component } from './views/prueba2/prueba2.component';


@NgModule({
  declarations: [Prueba2Component],
  imports: [
    CommonModule,
    SecondLazyRoutingModule
  ]
})
export class SecondLazyModule { }
