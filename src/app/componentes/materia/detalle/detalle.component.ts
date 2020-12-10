import { Component, Input, OnInit, Output } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input() materia:any;

  listadoMaterias = [];
  ocultar:boolean = true;

  constructor(private miHttp:MiHttpService) { 
    this.materia = new Materia();
  }

  ngOnInit(): void {
  }

}
