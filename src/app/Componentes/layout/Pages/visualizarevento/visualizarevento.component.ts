import { Component } from '@angular/core';

@Component({
  selector: 'app-visualizarevento',
  templateUrl: './visualizarevento.component.html',
  styleUrls: ['./visualizarevento.component.css']
})
export class VisualizareventoComponent {
  eliminarConfirmado = false;
  mostrarModal = false;

  confirmarEliminacion() {
    this.mostrarModal = true;
  }

  confirmacionEliminacion(confirmado: boolean) {
    this.eliminarConfirmado = confirmado;
    this.mostrarModal = false;

    if (confirmado) {
      // Realiza la eliminación del evento y muestra un mensaje de éxito.
      console.log('Se ha eliminado el evento con éxito');
    }
  }
}
