import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FormularioJugadorComponent } from './formulario-jugador.component';
import { SubidaDocumentosComponent } from './subida-documentos.component';
import { ResumenJugadorComponent } from './resumen-jugador.component';

const routes: Routes = [
  { path: '', component: FormularioJugadorComponent },
  { path: 'documentos', component: SubidaDocumentosComponent },
  { path: 'resumen', component: ResumenJugadorComponent },
];

@NgModule({
  declarations: [
    FormularioJugadorComponent,
    SubidaDocumentosComponent,
    ResumenJugadorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HazteJugadorModule {}