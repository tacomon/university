import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pb',
    pathMatch: 'full'
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: 'pb',
    children: [
      {
        path: '',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
      }
    ]
  },
  /* {
    path: 'pv',
    component: PrivateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./private/private.module').then((m) => m.PrivateModule),
      }
    ]
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
