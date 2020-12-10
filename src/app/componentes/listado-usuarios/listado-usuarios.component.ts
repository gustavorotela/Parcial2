import { Component, OnInit } from '@angular/core';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {

  listaUsuarios = [];
  tipoSeleccionado:number = 0;

  constructor(private miHttp:MiHttpService) { }

  ngOnInit(): void {
    this.miHttp.traerUsuario().subscribe( usuarios => {
      this.listaUsuarios = usuarios
    });
  }

}
