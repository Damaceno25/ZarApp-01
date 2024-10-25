import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingController } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then(m => m.SobrePageModule)
  },
  {
    path: 'cont',
    loadChildren: () => import('./cont/cont.module').then( m => m.ContPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
