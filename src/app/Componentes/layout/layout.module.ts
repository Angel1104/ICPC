import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';
import { SharedModule } from '../Reutilizable/shared/shared.module';
import { EventoComponent } from './Pages/evento/evento.component';
import { CompetenciaComponent } from './Pages/competencia/competencia.component';
import { VisualizareventoComponent } from './Pages/visualizarevento/visualizarevento.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    ReporteComponent,
    EventoComponent,
    CompetenciaComponent,
    VisualizareventoComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
