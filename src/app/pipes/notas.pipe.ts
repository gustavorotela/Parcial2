import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notas'
})
export class NotasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value < 4)
      return "Desaprobado";
    else if(value >= 4 && value <= 6)
      return "Aprobado";
    else
      return "Promocionado";
  }

}
