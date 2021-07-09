import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LambdaPageRoutingModule } from './lambda-routing.module';

import { LambdaPage } from './lambda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LambdaPageRoutingModule
  ],
  declarations: [LambdaPage]
})
export class LambdaPageModule {}
