import { Component, Input, OnInit } from '@angular/core';
import { Nota } from 'src/app/clases/nota';

@Component({
  selector: 'app-mostrar-notas',
  templateUrl: './mostrar-notas.component.html',
  styleUrls: ['./mostrar-notas.component.scss']
})
export class MostrarNotasComponent implements OnInit {

  @Input() notas:any;

  constructor() {}

  ngOnInit(): void {
  }

}
