import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit{
  constructor(private apiService: ApiService, private router:Router) {}
  title = "Angular Grid Card View";
  gridColumns = 3;

  data : any= {};

  

  ngOnInit () : void {
    this.llenarData();
  }
  llenarData() {
    this.apiService.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data);
    })
  }

  editarEvento(id:number){
    console.log(id);
    this.router.navigate(['admin/visualizarevento',id])
  }

  nuevoEvento() {}

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
