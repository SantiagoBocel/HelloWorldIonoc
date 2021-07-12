import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../providers/Rest/rest';
@Component({
  selector: 'app-lambda',
  templateUrl: './lambda.page.html',
  styleUrls: ['./lambda.page.scss'],
})
export class LambdaPage implements OnInit {

  Nombre = "";
  constructor(public provedor: RestProvider) { }


  ngOnInit() {
  }
  async ConsumirAPI(nombre, apellido){
   debugger
   this.provedor.EscribirAPI(nombre.value, apellido.value);
   this.Nombre =  this.provedor.ObtenerRespuesta;
  }
}
