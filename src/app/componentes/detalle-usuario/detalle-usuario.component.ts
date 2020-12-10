import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {

  @Input() usuario:any;

  constructor() { }

  ngOnInit(): void {
  }

}