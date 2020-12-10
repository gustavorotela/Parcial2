import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent implements OnInit {

  @Output() emitirProfesor: EventEmitter<any> = new EventEmitter();

  listaProfesores = [];

  constructor(private miHttp:MiHttpService) { }

  SeleccionarProfesor(profesor)
  {
    this.emitirProfesor.emit(profesor);
  }

  ngOnInit(): void {
    this.miHttp.traerUsuario().subscribe( usuarios => {
      for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].tipo == 2)
        {
          console.log(usuarios[i]);
          this.listaProfesores.push(usuarios[i]);
        }
      }
    })
  }

}
