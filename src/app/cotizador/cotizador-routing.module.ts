import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizadorPage } from './cotizador.page';

const routes: Routes = [
  {
    path: '',
    component: CotizadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizadorPageRoutingModule {}
