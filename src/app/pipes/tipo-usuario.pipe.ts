import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoUsuario'
})
export class TipoUsuarioPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let usuarios = [];
    if(args == 0)
    {
      usuarios = value;
    }
    else
    {
      for (let i = 0; i < value.length; i++) {
        if(value[i].tipo == args)
        {
          usuarios.push(value[i]);
        }
      }
    }
    
    return usuarios;
  }

}
