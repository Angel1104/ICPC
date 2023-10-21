import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-registro',
  templateUrl: './evento-registro.component.html',
  styleUrls: ['./evento-registro.component.css'],
})
export class EventoRegistroComponent {

  nombre = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s]{1,30}$/),
  ]);

  descripcion = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z0-9-|_|!|#|%(|),.\s]{9,98}$/),
  ]);

  tipoEvento = new FormControl('', [
    Validators.required,
  ]);

  fechaIni = new FormControl('', [
    Validators.required,
  ]);

  fechaFin = new FormControl('', [
    Validators.required,
  ]);

  getNombreErrorMessage() {
    if (this.nombre.hasError('required')) {
      return 'Campo obligatorio';
    }
    return this.nombre.hasError('pattern') ? 'No es un nombre válido' : '';
  }

  getDescripcionErrorMessage() {
    if (this.descripcion.hasError('required')) {
      return 'Campo obligatorio';
    }
    return this.descripcion.hasError('pattern') ? 'La descripción no cumple con el formato requerido' : '';
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

}
