
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HazteAbonadoComponent } from './hazte-abonado.component';

const routes: Routes = [
  { path: '', component: HazteAbonadoComponent }
];

@NgModule({
  declarations: [HazteAbonadoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HazteAbonadoModule {}
