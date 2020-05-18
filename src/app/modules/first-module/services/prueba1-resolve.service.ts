import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Prueba1Service } from './prueba1.service';
import { FirstLazyModule } from '../first-lazy.module';

@Injectable()
export class Prueba1ResolveService implements Resolve<number> {

  constructor(private _prueba1Service: Prueba1Service) { }
  resolve() {
    return this._prueba1Service.getDatos();
  }
}
