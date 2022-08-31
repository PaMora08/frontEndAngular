import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'nuevaExp', component: NewExperienciaComponent },
  { path: 'editarExp/:idExp', component: EditExperienciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
