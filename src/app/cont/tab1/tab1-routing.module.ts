import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },  {
    path: 'praias',
    loadChildren: () => import('./praias/praias.module').then( m => m.PraiasPageModule)
  },
  {
    path: 'cachoeiras',
    loadChildren: () => import('./cachoeiras/cachoeiras.module').then( m => m.CachoeirasPageModule)
  },
  {
    path: 'turistico',
    loadChildren: () => import('./turistico/turistico.module').then( m => m.TuristicoPageModule)
  },
  {
    path: 'trilhas',
    loadChildren: () => import('./trilhas/trilhas.module').then( m => m.TrilhasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
