import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstadoMaterias]'
})
export class EstadoMateriasDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.bachgroundColor = 'yellow';
  }

}
