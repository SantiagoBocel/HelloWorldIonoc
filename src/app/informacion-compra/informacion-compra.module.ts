import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionCompraPageRoutingModule } from './informacion-compra-routing.module';

import { InformacionCompraPage } from './informacion-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionCompraPageRoutingModule
  ],
  declarations: [InformacionCompraPage]
})
export class InformacionCompraPageModule {}
