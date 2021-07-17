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
  Consulta:any;
  cantidad_inicial:any;
  constructor(public provedor: RestProvider) {}

  ngOnInit() {}
  async Cotizador(moneda, duracion: number){
    //debugger
    let Primero = this.Option
    let Segunda = this.Option_A
    this.cantidad_inicial = moneda.value;
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
  async Consultar(){
    this.provedor.Leer_base().then(data=>
      {this.Consulta =data}).catch(data=>{console.log(data)})
  }

  async Confirmar(){
    if(this.timer != 0){
      //debugger
      this.Confirmacion = "Confirmado";
      let usuario= "Santiago"
      let cantidad = this.cantidad_inicial;
      let CoinDest = this.Option_A
      let resultado = this.Criptomoneda;
      let browser = this.navegador();
      let tiempo = this.Calcular_tiempo();
      let divice = navigator.platform;
  
      
    this.provedor.Tabla_Cotizar(usuario,cantidad,CoinDest,resultado,browser, divice,tiempo)
    }else
    {
      this.Confirmacion =" ";
    }
  }

  navegador(){
    var agente = navigator.userAgent;
    var navegadores = ["Chrome","Firefox","Opera","Trident","MISE","Edge"];
    for(var i in navegadores){
      if(agente.indexOf(navegadores[i]) != -1)
      return navegadores[i];
  }
 }
 
 Calcular_tiempo(){
  var date = new Date();
   return date.getDate() + "/" + date.getMonth() +"/"+date.getMonth() +
   "Hora"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
 }

}
