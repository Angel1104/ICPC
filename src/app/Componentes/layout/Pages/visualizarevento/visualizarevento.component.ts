import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizarevento',
  templateUrl: './visualizarevento.component.html',
  styleUrls: ['./visualizarevento.component.css']
})
export class VisualizareventoComponent {

  constructor(private router: Router) {}

  mostrarSweetAlert() {
    Swal.fire({
      title: '¿Estás seguro de eliminar el evento?',
      text: "No se podra deshacer la acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Código para eliminar el evento
        Swal.fire(
          'Eliminado!',
          'Se ha eliminado el evento con éxito',
          'success'
        ).then(() => {
          this.router.navigate(['/admin/evento']);
        });
      }
    });
  }
 
}
