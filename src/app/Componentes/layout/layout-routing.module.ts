import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';
import { EventoComponent } from './Pages/evento/evento.component';
import { CompetenciaComponent } from './Pages/competencia/competencia.component';
import { VisualizareventoComponent } from './Pages/visualizarevento/visualizarevento.component';

const routes: Routes = [{
  path:"", component: LayoutComponent,
  children: [
    {path: "usuarios", component:UsuarioComponent},
    {path: "reportes", component:ReporteComponent},
    {path: "evento", component:EventoComponent},
    {path: "competencia", component:CompetenciaComponent},
    {path: "visualizarevento", component:VisualizareventoComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
