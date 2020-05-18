# Problema dependencias circulares en Lazy Load

### El problema
Es frecuente el uso de servicios inyectados en un modulo cargado de forma perezosa, de forma que ese módulo contendría un servicio aislado que permitiria migrar ese modulo a cualquier otra parte de la aplicación u a otra aplicación.

El problema con los servicios inyectados en un módulo perezoso aparece cuando se genera un "abrazo cíclico" de carga entre los distintos artefactos del módulo perezoso, este WARNING es producido por el uso de la sintaxis **provideIn** en el propio servicio.

Siguiendo el ejemplo siguiente tendremos un módulo que se cargará de forma perezosa con los siguientes artefactos:

- 1 fichero module.ts que será quien centralice y gobierne todo el módulo:

                @NgModule({
                  declarations: [Prueba1Component],
                  imports: [CommonModule, FirstLazyRoutingModule]
                })
                export class FirstLazyModule { }

- 1 fichero module-routing.ts que contendrá todo el subenrutado del módulo:

                    const routes: Routes = [
                         {
                           path: '', component: Prueba1Component, 
                           resolve: { data: Prueba1ResolveService }
                          }  
                    ];
                
                    @NgModule({
                      imports: [RouterModule.forChild(routes)],
                      exports: [RouterModule]
                    })
                    export class FirstLazyRoutingModule { }
    Donde lo mas destacable sería la definición de un servicio resolve para hacer la llamada al servicio principal
    

- 1 servicio resolve que será el encargado de llamar al metodo del servicio previa carga del componente mediante el enrutado.

                
    
- 1 servicio con un metodo que devolverá una serie de datos mediante un Observable para alimentar al componente.
    
                @Injectable({providedIn: FirstLazyModule})
                export class Prueba1Service {
                    getDatos = () => of(1);
                }
                
    Lo mas destacable sería el uso de la instrucción [*providedIn*] que permite especificar cual sería el ámbito de este servicio y por tanto define en que partes de nuestra aplicación estaría permitido su uso, si intentásemos inyectar este servicio en algún otro módulo externo al actual o en el módulo raíz de nuestra aplicación recibiriamos un error en tiempo de ejecución, en tiempo de construcción no recibimos ningún error. 

- 1 servicio con un metodo que devolverá una serie de datos mediante un Observable para alimentar al componente.
```
    @Injectable({providedIn: FirstLazyModule})
    export class Prueba1ResolveService implements Resolve<number>{
        constructor(private _prueba1Service: Prueba1Service) { }
            
        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            return this._prueba1Service.getDatos();
        }
    }
```
    Lo mas destacable sería la reiteración en el uso de [*provideIn*] para autodeclarar su ámbito. A diferencia de esta forma de declarar el ámbito de un servicio existe una forma alternativa, haciendo uso del atributo providers en la definición de los módulos,   
- 1 module-routing.ts




Una solución es inyectar el servicio en el módulo principal (AppModule) a través de la instrucción *provideIn*:

            @Injectable({providedIn: 'root'})
            export class Modulo1Service {

Esto no sería lo deseado ya que con tal solución permites que los demás módulos de la aplicación tengan acceso a este servicio propiedad, en principio, 



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
