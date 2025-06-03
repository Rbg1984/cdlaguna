import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subida-documentos',
  templateUrl: './subida-documentos.component.html',
  styleUrls: ['./subida-documentos.component.css']
})
export class SubidaDocumentosComponent {
  dniFrontal: File | null = null;
  dniTrasero: File | null = null;
  tarjetaSanitaria: File | null = null;
  certificadoMedico: File | null = null;

  constructor(private router: Router) {}

  onFileChange(event: any, tipo: string) {
    const file = event.target.files[0];
    if (tipo === 'dniFrontal') this.dniFrontal = file;
    if (tipo === 'dniTrasero') this.dniTrasero = file;
    if (tipo === 'tarjetaSanitaria') this.tarjetaSanitaria = file;
    if (tipo === 'certificadoMedico') this.certificadoMedico = file;
  }

  siguiente() {
    localStorage.setItem('documentos', JSON.stringify({
      dniFrontal: this.dniFrontal?.name,
      dniTrasero: this.dniTrasero?.name,
      tarjetaSanitaria: this.tarjetaSanitaria?.name,
      certificadoMedico: this.certificadoMedico?.name
    }));
    this.router.navigate(['/hazte-jugador/resumen']);
  }
}