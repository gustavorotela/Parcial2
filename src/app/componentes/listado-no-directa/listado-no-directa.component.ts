import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-no-directa',
  templateUrl: './listado-no-directa.component.html',
  styleUrls: ['./listado-no-directa.component.scss']
})
export class ListadoNoDirectaComponent implements OnInit {

  @Input() examenes:any;

  constructor() { }

  ngOnInit(): void {
  }

}
