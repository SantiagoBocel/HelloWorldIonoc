import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CotizadorPageRoutingModule } from './cotizador-routing.module';

import { CotizadorPage } from './cotizador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizadorPageRoutingModule
  ],
  declarations: [CotizadorPage]
})
export class CotizadorPageModule {}
