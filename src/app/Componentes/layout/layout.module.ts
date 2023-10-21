import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms'; 
import { MatDatepickerModule } from '@angular/material/datepicker';

import { LayoutRoutingModule } from './layout-routing.module';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { ReporteComponent } from './Pages/reporte/reporte.component';
import { SharedModule } from '../Reutilizable/shared/shared.module';
import { EventoComponent } from './Pages/evento/evento.component';
import { CompetenciaComponent } from './Pages/competencia/competencia.component';
import { VisualizareventoComponent } from './Pages/visualizarevento/visualizarevento.component';
import { EventoRegistroComponent } from './Pages/evento-registro/evento-registro.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    ReporteComponent,
    EventoComponent,
    CompetenciaComponent,
    VisualizareventoComponent,
    EventoRegistroComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule, 
  ]
})
export class LayoutModule { }
