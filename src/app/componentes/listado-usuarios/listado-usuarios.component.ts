import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {

  listaUsuarios = [];
  tipoSeleccionado:number = 0;
  usuario:Usuario;

  constructor(private miHttp:MiHttpService) { 
    this.usuario = new Usuario();
  }

  mostrarDetalle(usuario)
  {
    this.usuario = usuario;
  }

  ngOnInit(): void {
    this.miHttp.traerUsuario().subscribe( usuarios => {
      this.listaUsuarios = usuarios
    });
  }

}
