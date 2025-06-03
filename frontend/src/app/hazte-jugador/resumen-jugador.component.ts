import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-jugador',
  templateUrl: './resumen-jugador.component.html',
  styleUrls: ['./resumen-jugador.component.css']
})
export class ResumenJugadorComponent implements OnInit {
  jugador: any;
  documentos: any;

  ngOnInit() {
    this.jugador = JSON.parse(localStorage.getItem('jugadorForm') || '{}');
    this.documentos = JSON.parse(localStorage.getItem('documentos') || '{}');
  }

  enviar() {
    console.log('Datos enviados:', this.jugador, this.documentos);
  }
}