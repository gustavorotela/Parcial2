import { Directive, ElementRef, Input } from '@angular/core';
import { Materia } from '../clases/materia';

@Directive({
  selector: '[appCupoAlumnos]'
})
export class CupoAlumnosDirective {

  constructor(private el:ElementRef) { }

  @Input() set appCupoAlumnos(cupo:any[]){
    try{
      if(cupo.length>1)
      {
        this.el.nativeElement.style.backgroundColor = 'red';
      }
      else
      {
        this.el.nativeElement.style.backgroundColor = 'lightGreen';
      }
    }
    catch(error){
      this.el.nativeElement.style.backgroundColor = 'lightGreen';
    }
  };
}
