import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoExamen'
})
export class EstadoExamenPipe implements PipeTransform {

  transform(value: any): any {
    if (value < 4) {
      return 'Desaprobado';
    }
    else if(value >= 4 && value < 6){
      return 'Aprobado';
    }
    else{
      return 'Aprobación directa';
    }
  }

}
