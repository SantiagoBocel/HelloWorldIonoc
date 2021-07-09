import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LambdaPage } from './lambda.page';

const routes: Routes = [
  {
    path: '',
    component: LambdaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LambdaPageRoutingModule {}
