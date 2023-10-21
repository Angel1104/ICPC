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
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes colocar el código para eliminar el evento
        Swal.fire('Se ha eliminado el evento con éxito', '', 'success').then(() => {
          // Después de eliminar el evento y mostrar el mensaje de éxito, redirige a la página de eventos
          this.router.navigate(['/admin/evento']);
        });
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'error');
      }
    });
  }
}
