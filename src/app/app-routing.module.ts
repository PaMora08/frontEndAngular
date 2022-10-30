import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHysComponent } from './components/hys/edit-hys/edit-hys.component';
import { NewHysComponent } from './components/hys/new-hys/new-hys.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path: '', redirectTo:'portfolio', pathMatch:'full'},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:idExp', component:EditExperienciaComponent},
  {path: 'nuevaSkill', component: NewHysComponent},
  {path: 'edithys/:idSkill', component:EditHysComponent},
  {path: 'nuevoproy', component:NewProyectoComponent},
  {path: 'editproy/:idProyecto', component:EditProyectoComponent},
  {path: 'editacercade/:idPersona', component:EditAcercaDeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
