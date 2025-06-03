import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hazte-jugador',
    loadChildren: () =>
      import('./hazte-jugador/hazte-jugador.module').then(
        (m) => m.HazteJugadorModule
      ),
  },
  {
    path: 'hazte-socio',
    loadChildren: () =>
      import('./hazte-socio/hazte-socio.module').then(
        (m) => m.HazteSocioModule
      ),
  },
  {
    path: 'hazte-abonado',
    loadChildren: () =>
      import('./hazte-abonado/hazte-abonado.module').then(
        (m) => m.HazteAbonadoModule
      ),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
