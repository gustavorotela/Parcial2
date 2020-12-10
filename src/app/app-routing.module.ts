import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActasDeExamenComponent } from './componentes/actas-de-examen/actas-de-examen.component';
import { AlumnosBorradosComponent } from './componentes/alumnos-borrados/alumnos-borrados.component';
import { BorrarAlumnoComponent } from './componentes/borrar-alumno/borrar-alumno.component';
import { CargarExamenComponent } from './componentes/cargar-examen/cargar-examen.component';
import { InscripcionAlumnoComponent } from './componentes/inscripcion-alumno/inscripcion-alumno.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { InscripcionComponent } from './componentes/materia/inscripcion/inscripcion.component';
import { ListadoComponent } from './componentes/materia/listado/listado.component';
import { MateriaAltaComponent } from './componentes/materia/materia-alta/materia-alta.component';
import { MateriasProfesorComponent } from './componentes/materia/materias-profesor/materias-profesor.component';
import { MostrarActasComponent } from './componentes/mostrar-actas/mostrar-actas.component';
import { NoTienePermisoComponent } from './componentes/no-tiene-permiso/no-tiene-permiso.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AdministradorAltaComponent } from './componentes/usuario/administrador-alta/administrador-alta.component';
import { UsuarioAltaComponent } from './componentes/usuario/usuario-alta/usuario-alta.component';
import { AdminAuthGuard } from './servicios/admin-auth.guard';
import { AuthGuard } from './servicios/auth.guard';
import { ProfesorAuthGuard } from './servicios/profesor-auth.guard';

const routes: Routes = [
  {path: "", component:LoginComponent, data: {animation: 'Login'}},
  {path: "Login", component:LoginComponent, data: {animation: 'Login'}},
  {path: "Principal", component:PrincipalComponent, data: {animation: 'Principal'}, canActivate: [AuthGuard]},
  {path: "Registrar", component:UsuarioAltaComponent},
  {path: "Materia", component:ListadoComponent},
  {path: "MisMaterias", component:MateriasProfesorComponent, canActivate: [ProfesorAuthGuard]},
  {path: "AltaMateria", component:MateriaAltaComponent, canActivate: [AdminAuthGuard]},
  {path: "Inscripcion", component:InscripcionComponent, canActivate: [AdminAuthGuard]},
  {path: "BorrarAlumno", component:BorrarAlumnoComponent, canActivate: [AdminAuthGuard]},
  {path: "AltaAdministrador", component:AdministradorAltaComponent, canActivate: [AdminAuthGuard]},
  {path: "CargarExamen", component:CargarExamenComponent, canActivate: [ProfesorAuthGuard]},
  {path: "InscripcionAlumno", component:InscripcionAlumnoComponent},
  {path: "CargarExamen", component:CargarExamenComponent, canActivate: [ProfesorAuthGuard]},
  {path: "AlumnosBorrados", component:AlumnosBorradosComponent},
  {path: "ListaUsuarios", component:ListadoUsuariosComponent, canActivate: [AdminAuthGuard]},
  {path: "ActasDeExamen", component:ActasDeExamenComponent, canActivate: [ProfesorAuthGuard]},
  {path: "MostrarActas", component:MostrarActasComponent},
  {path: "NoTienePermiso", component:NoTienePermisoComponent},
  {path: "**", component:PrincipalComponent, data: {animation: 'Principal'}, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
