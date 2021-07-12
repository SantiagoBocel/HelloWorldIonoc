import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'hello-world',
    pathMatch: 'full'
  },
  {
    path: 'hello-world',
    loadChildren: () => import('./hello-world/hello-world.module').then( m => m.HelloWorldPageModule)
  },  {
    path: 'lambda',
    loadChildren: () => import('./lambda/lambda.module').then( m => m.LambdaPageModule)
  },
  {
    path: 'cotizador',
    loadChildren: () => import('./cotizador/cotizador.module').then( m => m.CotizadorPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
