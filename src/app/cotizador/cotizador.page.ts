import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestProvider } from '../providers/Rest/rest';


@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.page.html',
  styleUrls: ['./cotizador.page.scss'],
})
export class CotizadorPage implements OnInit {
  //Calcular tiempos
  time: BehaviorSubject<string> = new BehaviorSubject("00")
  timer: number;
  // Moneda
  Criptomoneda:any;
  Original:string;
  Destino:any;
  isenabled:boolean=false;
  Confirmacion:any;
  Consulta:any;
  id_cotizacion:any; 
  cantidad:any;
  constructor(public provedor: RestProvider) {}

  ngOnInit() {}
  async Cotizador(moneda){
    //debugger
    let CoinOrgin = this.Original
    let CoinDest = this.Destino
    let usuario= "Santiago"
    this.cantidad = moneda.value;
    
    this.provedor.Cotizar(CoinOrgin,CoinDest,moneda.value).then(data=>{
      this.Criptomoneda = data;
    }).catch(data=>{
      console.log(data);
    })
    
    this.timer = 10;
    setInterval(()=>{
      this.updateTimevalue();
    },1000);
    //Mostrar datos
    document.getElementById('Info').style.display = 'block';
    let browser = this.navegador();
    let tiempo = this.Calcular_tiempo();
    let divice = navigator.platform;
    //Informacion base de datos 
    this.provedor.Tabla_Cotizar(usuario,this.cantidad,CoinDest,this.Criptomoneda,browser, divice,tiempo).then(data=>{
      this.id_cotizacion = data;
    }).catch(data=>{
    console.log(data)
  })
  if(this.timer != 0){
    this.isenabled=true; 
  }else
  {
    this.isenabled=false; 
  }
  }
  Asignar_De(event:CustomEvent){
    this.Original
     =  event.detail.value;
  }
  Asignar_A(event:CustomEvent){
    this.Destino = event.detail.value;
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
    let CoinDest = this.Destino
    let usuario= "Santiago"
    let browser = this.navegador();
    let resultado = this.Criptomoneda;
    let tiempo = this.Calcular_tiempo();
    let divice = navigator.platform;
    this.provedor.Tabla_Compra(this.id_cotizacion,tiempo,usuario,CoinDest,this.cantidad,resultado,browser,divice)
    this.isenabled=false; 
    document.getElementById('Info').style.display = 'none';
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
   return date.getDate() + "/" + date.getMonth() +"/"+date.getFullYear() +
   "Hora"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
 }

}
