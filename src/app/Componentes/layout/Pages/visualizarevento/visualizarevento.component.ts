import { Component,OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-visualizarevento',
  templateUrl: './visualizarevento.component.html',
  styleUrls: ['./visualizarevento.component.css']
})
export class VisualizareventoComponent implements OnInit{

  constructor(private router: Router, private activaterouter:ActivatedRoute,private apiService: ApiService) {}

  ngOnInit(): void {
      let eventoId = this.activaterouter.snapshot.paramMap.get('id');
      if (eventoId !== null) {
        this.llenarData(parseInt(eventoId, 10));
      } else {
        this.llenarData(0);
      }
      console.log(eventoId);
  }
  data : any = {};
  llenarData(id:number){
    this.apiService.getDataEventId(id).subscribe(data=>{
      this.data = data;
      console.log(this.data);
      
    })
  }
  mostrarSweetAlert(id:number) {
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
        this.eliminarevento(id);
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
  eliminarevento(id:number){
    this.apiService.deleteEventId(id).subscribe();
  }
 
}
