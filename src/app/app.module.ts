import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';

import { VisualesModule } from './modulos/visuales/visuales.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioAltaComponent } from './componentes/usuario/usuario-alta/usuario-alta.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdministradorAltaComponent } from './componentes/usuario/administrador-alta/administrador-alta.component';
import { MateriaAltaComponent } from './componentes/materia/materia-alta/materia-alta.component';
import { ProfesoresComponent } from './componentes/listas/profesores/profesores.component';
import { ListaProfesoresComponent } from './componentes/listas/lista-profesores/lista-profesores.component';
import { InscripcionComponent } from './componentes/materia/inscripcion/inscripcion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ListadoComponent } from './componentes/materia/listado/listado.component';
import { DetalleComponent } from './componentes/materia/detalle/detalle.component';
import { EstadoMateriasDirective } from './directivas/estado-materias.directive';
import { MateriasProfesorComponent } from './componentes/materia/materias-profesor/materias-profesor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BorrarAlumnoComponent } from './componentes/borrar-alumno/borrar-alumno.component';
import { SinpermisoComponent } from './componentes/sinpermiso/sinpermiso.component';
import { CargarExamenComponent } from './componentes/cargar-examen/cargar-examen.component';
import { InscripcionAlumnoComponent } from './componentes/inscripcion-alumno/inscripcion-alumno.component';
import { MostrarExamenesComponent } from './componentes/mostrar-examenes/mostrar-examenes.component';
import { AlumnosBorradosComponent } from './componentes/alumnos-borrados/alumnos-borrados.component';
import { MostrarEmailComponent } from './componentes/mostrar-email/mostrar-email.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { TipoUsuarioPipe } from './pipes/tipo-usuario.pipe';
import { ActasDeExamenComponent } from './componentes/actas-de-examen/actas-de-examen.component';
import { ListadoDeAsignaturasComponent } from './componentes/listado-de-asignaturas/listado-de-asignaturas.component';
import { ListadoAprobacionDirectaComponent } from './componentes/listado-aprobacion-directa/listado-aprobacion-directa.component';
import { ListadoNoDirectaComponent } from './componentes/listado-no-directa/listado-no-directa.component';
import { ListaAsignaturaPipe } from './pipes/lista-asignatura.pipe';
import { NotasPipe } from './pipes/notas.pipe';
import { CupoAlumnosDirective } from './directivas/cupo-alumnos.directive';
import { MostrarActasComponent } from './componentes/mostrar-actas/mostrar-actas.component';
import { MostrarNotasComponent } from './componentes/mostrar-notas/mostrar-notas.component';
import { DetalleAcatComponent } from './componentes/detalle-acat/detalle-acat.component';
import { NoTienePermisoComponent } from './componentes/no-tiene-permiso/no-tiene-permiso.component';

var firebaseConfig = {
  apiKey: "AIzaSyB940hFSoe72VAn-8IMpe_-C_gTvJU_owo",
  authDomain: "parcial2-f222f.firebaseapp.com",
  databaseURL: "https://parcial2-f222f.firebaseio.com",
  projectId: "parcial2-f222f",
  storageBucket: "parcial2-f222f.appspot.com",
  messagingSenderId: "729281717493",
  appId: "1:729281717493:web:e63604a60e9c5cae2451bc"
};

@NgModule({
  declarations: [
    AppComponent,
    UsuarioAltaComponent,
    LoginComponent,
    AdministradorAltaComponent,
    MateriaAltaComponent,
    ProfesoresComponent,
    ListaProfesoresComponent,
    InscripcionComponent,
    PrincipalComponent,
    MenuComponent,
    ListadoComponent,
    DetalleComponent,
    EstadoMateriasDirective,
    MateriasProfesorComponent,
    BorrarAlumnoComponent,
    SinpermisoComponent,
    CargarExamenComponent,
    InscripcionAlumnoComponent,
    MostrarExamenesComponent,
    AlumnosBorradosComponent,
    MostrarEmailComponent,
    ListadoUsuariosComponent,
    TipoUsuarioPipe,
    ActasDeExamenComponent,
    ListadoDeAsignaturasComponent,
    ListadoAprobacionDirectaComponent,
    ListadoNoDirectaComponent,
    ListaAsignaturaPipe,
    NotasPipe,
    CupoAlumnosDirective,
    MostrarActasComponent,
    MostrarNotasComponent,
    DetalleAcatComponent,
    NoTienePermisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    VisualesModule,
    NgbModule
  ],
  providers: [AngularFireDatabase,AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
