import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-jugador',
  templateUrl: './formulario-jugador.component.html',
  styleUrls: ['./formulario-jugador.component.css']
})
export class FormularioJugadorComponent {
  jugadorForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.jugadorForm = this.fb.group({
      nombre: ['', Validators.required],
      dni: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      localidad: [''],
      provincia: [''],
      pais: [''],
      nacionalidad: [''],
      domicilio: [''],
      codigoPostal: [''],
      localidadProvincia: [''],
      email: ['', [Validators.required, Validators.email]],
      telefonoFijo: [''],
      telefonoMovil: ['', Validators.required],
      tarjetaMedica: [''],
      padre: this.fb.group({
        nombre: [''],
        dni: [''],
        telefono: [''],
        domicilio: [''],
        email: ['']
      }),
      madre: this.fb.group({
        nombre: [''],
        dni: [''],
        telefono: [''],
        domicilio: [''],
        email: ['']
      })
    });
  }

  siguiente() {
    if (this.jugadorForm.valid) {
      localStorage.setItem('jugadorForm', JSON.stringify(this.jugadorForm.value));
      this.router.navigate(['/hazte-jugador/documentos']);
    }
  }
}