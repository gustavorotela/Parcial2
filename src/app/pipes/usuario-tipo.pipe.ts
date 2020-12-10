import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarioTipo'
})
export class UsuarioTipoPipe implements PipeTransform {

  transform(value: any):any {
    console.log(value);
    switch (value) {
      case "1":
        return 'Alumno';
      case "2":
        return 'Profesor';
      case "3":
        return 'Administrador';
    }
  }
}