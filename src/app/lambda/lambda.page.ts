import { Component, OnInit } from '@angular/core';
import { RestProvider } from '../providers/Rest/rest';
@Component({
  selector: 'app-lambda',
  templateUrl: './lambda.page.html',
  styleUrls: ['./lambda.page.scss'],
})
export class LambdaPage implements OnInit {

  constructor(public provedor: RestProvider) { }

  ngOnInit() {
  }
  async ConsumirAPI(nombre){
    // var jsontext ='"'+ "Name" + '"'+":"+ '"'+nombre.value+'"';
    // console.log("Json",jsontext);
    var observar = this.provedor.EscribirAPI(nombre.value)
  }

}
