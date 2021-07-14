import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestProvider } from '../providers/Rest/rest';


@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.page.html',
  styleUrls: ['./cotizador.page.scss'],
})
export class CotizadorPage implements OnInit {
 
  time: BehaviorSubject<string> = new BehaviorSubject("00")
  timer: number;
  Criptomoneda:any;
  Option:string;
  Option_A:any;
  Confirmacion:any;
  constructor(public provedor: RestProvider) {}

  ngOnInit() {}
  async Cotizador(moneda, duracion: number){
    //debugger
     let Primero = this.Option
     let Segunda = this.Option_A
     let valor
    this.provedor.Cotizar(Primero,Segunda,moneda.value).then(data=>{
      this.Criptomoneda = data;
    }).catch(data=>{
      console.log(data);
    })
    this.timer = duracion;
    setInterval(()=>{
      this.updateTimevalue();
    },1000);
  }
  Asignar_De(event:CustomEvent){
    this.Option =  event.detail.value;
  }
  Asignar_A(event:CustomEvent){
    this.Option_A = event.detail.value;
  }

  updateTimevalue(){
    let seconds: any = this.timer;
    let contador = this.timer
    this.timer = contador - 1; 
    if(this.timer<1){
      this.timer = 0
    }
    seconds = String("0" + Math.floor(seconds)).slice(-2);

    const text = seconds;
    this.time.next(text)
  }

  async Confirmar(){
    if(this.timer != 0){

      this.Confirmacion = "Confirmado";
      let id = String((this.timer *3));
      let direccionIP = "192.168.56.1";
      let browser = "Microsoft_edge";
      let Transaccion = this.Option+this.Criptomoneda+this.Option_A;
    this.provedor.BaseDatos(id,direccionIP,browser,Transaccion );
    }else
    {
      this.Confirmacion =" ";
    }
  }
}
