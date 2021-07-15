import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionCompraPage } from './informacion-compra.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionCompraPageRoutingModule {}
