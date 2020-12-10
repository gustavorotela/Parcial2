import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { MiHttpService } from 'src/app/servicios/mi-http.service';
import { Router } from '@angular/router';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-usuario-alta',
  templateUrl: './usuario-alta.component.html',
  styleUrls: ['./usuario-alta.component.scss']
})
export class UsuarioAltaComponent implements OnInit {

  usuario:Usuario;
  pass2:string;
  listaUsuarios;
  emailExiste:boolean;
  id:number;
  msgs : any = [];
  imagen : any;

  public files: NgxFileDropEntry[] = [];
  public imagenPreview : any;

  constructor(private miHttp:MiHttpService, private router:Router) { 
    this.usuario = new Usuario();
  }

  registrar()
  {
    this.emailExiste = false;
    if(this.usuario.password == this.pass2)
    {
      if(this.usuario.email.indexOf('@') == -1)
      {
        this.msgs = [];
        this.msgs.push({severity:'error', summary:'Error', detail:'Email incorrecto'});
      }
      else {
        for (let i = 0; i < this.listaUsuarios.length; i++) {
          if(this.usuario.email == this.listaUsuarios[i].email)
            this.emailExiste = true;
        }
        if(this.emailExiste){
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Error', detail:'Este email ya fue registrado'});
        }
        else
        {
          if(this.usuario.tipo != 1 && this.usuario.tipo != 2) {
            this.msgs = [];
            this.msgs.push({severity:'error', summary:'Error', detail:'Debe seleccionar un tipo'});
          }
          else{
            this.usuario.id = this.id;
            this.miHttp.cargarUsuarioImagen(this.usuario,this.imagen);
            setTimeout(() => this.miHttp.cargarUsuario(this.usuario,this.id.toString()),2000);
            this.router.navigate(['/Login']);
          }
        }
      }
    }
    else
    {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error', detail:'Las contraseñas no coinciden.'});
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
    this.miHttp.traerUsuario().subscribe( usuarios => {
      this.listaUsuarios = usuarios;
    });
    this.miHttp.ultimoIdUsuario().subscribe( data => {
      if(data == "")
        this.id = 1
      else
      {
        this.id = data[0].id;
        this.id++;
      }
    });
  }

}