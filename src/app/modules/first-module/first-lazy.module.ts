import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLazyRoutingModule } from './first-lazy-routing.module';
import { Prueba1ViewComponent } from './views/prueba1/prueba1.component';
import { Prueba1Service } from './services/prueba1.service';
import { Prueba1ResolveService } from './services/prueba1-resolve.service';

@NgModule({
  declarations: [Prueba1ViewComponent],
  imports: [ CommonModule, FirstLazyRoutingModule ],
  providers: [Prueba1Service, Prueba1ResolveService]
})
export class FirstLazyModule { }
