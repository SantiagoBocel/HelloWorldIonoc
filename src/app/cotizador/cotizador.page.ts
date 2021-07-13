import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../providers/Rest/rest';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.page.html',
  styleUrls: ['./cotizador.page.scss'],
})
export class CotizadorPage implements OnInit {

  Criptomoneda:any;
  constructor(public provedor: RestProvider) {}

  ngOnInit() {}
  async Cotizador(moneda){
    //debugger
    this.provedor.Cotizar().then(data=>{
     this.Criptomoneda = moneda.value / data["price"];
      console.log(this.Criptomoneda);
    }).catch(data=>{
      console.log(data);
    })
 
  }
}
