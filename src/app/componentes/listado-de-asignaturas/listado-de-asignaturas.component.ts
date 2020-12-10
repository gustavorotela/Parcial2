import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-listado-de-asignaturas',
  templateUrl: './listado-de-asignaturas.component.html',
  styleUrls: ['./listado-de-asignaturas.component.scss']
})
export class ListadoDeAsignaturasComponent implements OnInit {

  @Input() profesor:any;
  @Output() emitirMateria: EventEmitter<any> = new EventEmitter();

  listaMaterias = [];

  constructor(private miHttp:MiHttpService) { }

  devolverMateria(materia)
  {
    this.emitirMateria.emit(materia);
  }

  ngOnInit(): void {
    this.miHttp.traerMaterias().subscribe( materias => {
      this.listaMaterias = materias;
    });
  }

}
