import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MiHttpService } from 'src/app/servicios/mi-http.service';
import { PrincipalComponent } from '../../principal/principal.component';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent implements OnInit {

  listaMaterias = [];
  listaAlumnos = [];
  alumnosMateria = [];
  materiaSeleccionada:Materia;
  id:number;
  existeEnMateria:boolean = false;

  constructor(private miHttp:MiHttpService) { 
    this.materiaSeleccionada = new Materia();
  }

  agregarAlumno(alumno)
  {
    console.log(alumno);
    if(this.listaAlumnos.indexOf(alumno) == 0)
    {
      console.log('1');
      this.alumnosMateria.push(alumno);

      const index: number = this.listaAlumnos.indexOf(alumno);
      this.listaAlumnos.splice(index, 1);
    }
    else
    {
      console.log('2');
      const index: number = this.alumnosMateria.indexOf(alumno);
      this.alumnosMateria.splice(index, 1);

      this.listaAlumnos.push(alumno);
    }
  }

  seleccionarMateria(materia)
  {
    this.materiaSeleccionada = materia;
    this.miHttp.traerUsuario().subscribe( alumnos => {
      for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].tipo == 1)
        {
          this.existeEnMateria = false;
          if(this.materiaSeleccionada.alumnos == [])
          {
            for (let j = 0; j < this.materiaSeleccionada.alumnos.length; j++) {
              console.log(this.materiaSeleccionada.alumnos[j].email);
              console.log(alumnos[i].email);
              if(this.materiaSeleccionada.alumnos[j].email == alumnos[i].email)
                this.existeEnMateria = true;
            }
            if(this.existeEnMateria)
              this.alumnosMateria.push(alumnos[i]);
            else
              this.listaAlumnos.push(alumnos[i]);
          }
          else
            this.listaAlumnos.push(alumnos[i]);
        }
      }
    });
  }

  guardarCambios()
  {
    this.materiaSeleccionada.alumnos = this.alumnosMateria;
    console.log(this.alumnosMateria);
    this.miHttp.modificarMateria(this.materiaSeleccionada,this.materiaSeleccionada.id.toString())
  }

  ngOnInit(): void {
    this.miHttp.traerMaterias().subscribe( materias => {
      this.listaMaterias = materias;
    });  
  }
}