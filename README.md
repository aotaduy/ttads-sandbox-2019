# Ttads
Componentes y codigo de prueba para clases

## Referencias de real world app en (https://github.com/gothinkster/realworld)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-formControl` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Ejercicio

Realizar una aplicación que permita editar una lista de usuarios
La aplicación debe tener una pagina de login,
el usuario logueado es parte de esa lista.
La aplicación debe tener una pagina para mostrar la lista
Otra para editar los usuarios
Otra para dar de alta un usuario
Otra para ver un usuario.
(Se puede usar el formulario de edición con los campos en readonly)
Y otra para eliminar los usuarios

Cada usuario tiene permisos de
agregar nuevos usuarios,
editar usuarios
eliminar usuarios
editar sus propios datos

El usuario no puede eliminarse a si mismo


---

### Ejercicio Reactive Forms

####Formulario de creacion de cuenta. 
Quiero poder crear un usuario con nombre, apellido, email, password y confirmacion de password. 
todos los campos son requeridos. Se debe validar el email. 
El password debe tener como minimo 8 caracteres, contar con mayusculas, minusculas, numeros y simbolos. 
Por cada una de estas reglas se debe mostrar un cartel grisado indicando la regla y el mismo se debe prender (colorear como negro) una vez que se valide la regla como correcta. 

El boton de enviar el forumalio se debe habilitar unicamente despues de que todas las validaciones sean correctas. 
