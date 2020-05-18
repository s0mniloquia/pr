import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FirstLazyModule } from '../first-lazy.module';

@Injectable()
export class Prueba1Service {

  getDatos = () => of(1)

}
