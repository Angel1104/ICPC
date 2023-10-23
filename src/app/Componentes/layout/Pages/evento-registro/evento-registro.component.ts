import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CreateEventI } from 'src/app/modelos/createEvent.int';

@Component({
  selector: 'app-evento-registro',
  templateUrl: './evento-registro.component.html',
  styleUrls: ['./evento-registro.component.css'],
})
export class EventoRegistroComponent implements OnInit {

  nombre = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s]{3,30}$/),
  ]);

  descripcion = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9-|_|!|#|%(|),.\s]{4,100}$/),

  ]);

  id_tipoEventos = new FormControl('', [
    Validators.required,
  ]);

  fechaIni = new FormControl('', [
    Validators.required,
  ]);

  fechaFin = new FormControl('', [
    Validators.required,
  ]);

  encargado = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s]{3,40}$/),
  ]);

  requisitos = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9-|_|!|#|%(|),.\s]{4,1000}$/),
  ]);

  lugar = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s]{3,20}$/),
  ]);

  getNombreErrorMessage() {
    if (this.nombre.hasError('required')) {
      return 'Este campo obligatorio';
    }
    return this.nombre.hasError('pattern') ? 'El nombre debe ser de 3 a 30 caracteres, puede contener letras, números y caracteres especiales como ser: _ - ! % ()' : '';
  }

  getDescripcionErrorMessage() {
    if (this.descripcion.hasError('required')) {
      return 'Este campo obligatorio';
    }
    return this.descripcion.hasError('pattern') ? 'La descripcion deben ser de 4 a 100 caracteres, pueden contener letras, números y caracteres especiales como ser: - | _ ! # % ( ) , . ' : '';
  }

  getFechaIniErrorMessage() {
    if (this.fechaIni.hasError('required')) {
      return 'Campo obligatorio';
    }
    return '';
  }

  getFechaFinErrorMessage() {
    if (this.fechaFin.hasError('required')) {
      return 'Campo obligatorio';
    }
    return '';
  }

  getEncargadoErrorMessage() {
    if (this.encargado.hasError('required')) {
      return 'Este campo obligatorio';
    }
    return this.encargado.hasError('pattern') ? 'El encargado debe ser de 4 a 40 caracteres, puede contener letras, números y caracteres especiales como ser: _ - ! % ()' : '';
  }

  getRequisitosErrorMessage() {
    if (this.requisitos.hasError('required')) {
      return 'Este campo obligatorio';
    }
    return this.requisitos.hasError('pattern') ? 'Los requisitos deben ser de máximo 1000 caracteres, pueden contener letras, números y caracteres especiales como ser: - | _ ! # % ( ) , . ' : '';
  }

  getLugarErrorMessage() {
    if (this.lugar.hasError('required')) {
      return 'Este campo obligatorio';
    }
    return this.lugar.hasError('pattern') ? 'El lugar debe ser de 3 a 20 caracteres, puede contener letras, números y caracteres especiales como ser: _ - ! % ()' : '';
  }

  /*Sweet alert*/

  constructor(private router: Router) {}

  formNuevoEvento = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    fechaIni: new FormControl(''),
    fechaFin: new FormControl(''),
    requisitos: new FormControl(''),
    encargado: new FormControl(''),
    lugar: new FormControl(''),
    id_tipoEventos: new FormControl(''),
  });
  
  
  ngOnInit(): void {
      
  }

  agregarEvento(form:CreateEventI){
    console.log(form);
    
  }

  mostrarSweetAlert() {
    Swal.fire({
      title: '¿Estás seguro de cancelar el registro?',
      text: "No se guardaran lo datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/admin/evento']);
      }
    });
  }
}
