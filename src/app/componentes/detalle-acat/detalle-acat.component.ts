import { Component, Input, OnInit } from '@angular/core';
import { Examen } from 'src/app/clases/examen';

@Component({
  selector: 'app-detalle-acat',
  templateUrl: './detalle-acat.component.html',
  styleUrls: ['./detalle-acat.component.scss']
})
export class DetalleAcatComponent implements OnInit {

  @Input() acta:any;

  constructor() { }

  ngOnInit(): void {
  }

}
