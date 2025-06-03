
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HazteSocioComponent } from './hazte-socio.component';

const routes: Routes = [
  { path: '', component: HazteSocioComponent }
];

@NgModule({
  declarations: [HazteSocioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HazteSocioModule {}
