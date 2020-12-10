import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listaAsignatura'
})
export class ListaAsignaturaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let materiaProfesor;
    let materias = [];

    for (let i = 0; i < value.length; i++) {
      materiaProfesor = value[i].profesor;
      for (let j = 0; j < materiaProfesor.length; j++) {
        if(materiaProfesor[j].email == args.email)
        {
          materias.push(value[i]);
        }
      }
    }
    return materias;
  }
}
