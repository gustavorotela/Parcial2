import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listadoMaterias = [];
  ocultar:boolean = true;
  materia:Materia;

  constructor(private miHttp:MiHttpService) { 
  }

  mostrarDetalle(materia)
  {
    this.materia = materia;
    this.ocultar = false;
  }

  inscribir()
  {
    
  }

  ngOnInit(): void {
    this.miHttp.traerMaterias().subscribe( materias => {
      this.listadoMaterias = materias;
    });
  }

}
