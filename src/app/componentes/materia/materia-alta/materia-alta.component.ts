import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MiHttpService } from 'src/app/servicios/mi-http.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-materia-alta',
  templateUrl: './materia-alta.component.html',
  styleUrls: ['./materia-alta.component.scss']
})
export class MateriaAltaComponent implements OnInit {

  materia:Materia;
  ocultar:false;
  id:number;
  listaProfesores = [];
  emailProfesor;
  msgs : any = [];
  imagen : any;

  public files: NgxFileDropEntry[] = [];
  public imagenPreview : any;

  constructor(private miHttp:MiHttpService) {
    this.materia = new Materia();
  }

  profesorSeleccionado(profesor)
  {
    this.materia.profesor = this.materia.profesor || [];
    this.materia.profesor.push(profesor);
    this.emailProfesor = profesor.email;
  }

  guardarMateria()
  {
    if(this.materia.cupo < 10)
    {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error', detail:'El cupo debe ser mayor a 10.'});
    }
    else
    {
      let pattern = /[*\\/|":?><@]/gi;
      if(this.materia.nombre == '')
      {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error', detail:'El nombre no puede estar vacío'});
      }
      else
      {
        if(this.materia.nombre.length < 5 || pattern.test(this.materia.nombre))
        {
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Error', detail:'El nombre es muy corto o tiene caracteres especiales'});
        }
        else
        {
          this.materia.id = this.id;
          this.miHttp.cargarImagenMateria(this.materia,this.id.toString(),this.imagen);
          setTimeout(() => this.miHttp.cargarMateria(this.materia,this.id.toString()),2000);
        }
      }
    }
    
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        const reader = new FileReader();
        fileEntry.file((file: File) => {
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.imagenPreview = reader.result;
          }
          this.imagen = file;
          //console.log(this.imagen);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  public fileOver(event){
  }
 
  public fileLeave(event){
  }

  ngOnInit(): void {
    this.miHttp.ultimoIdMateria().subscribe( data => {
      if(data == "")
        this.id = 1
      else
      {
        this.id = data[0].id;
        this.id++;
      }
    });
    this.miHttp.traerUsuario().subscribe( usuarios => {
      for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].tipo == 2)
        {
          this.listaProfesores.push(usuarios[i]);
        }
      }
    })
  }

}
