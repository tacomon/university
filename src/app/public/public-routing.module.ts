import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./actividades/actividades.module').then((m) => m.ActividadesModule),
      },
      {
        path: 'unidades',
        loadChildren: () =>
          import('./unidades/unidades.module').then((m) => m.UnidadesModule),
      },
      {
        path: 'temas',
        loadChildren: () =>
          import('./temas/temas.module').then((m) => m.TemasModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
