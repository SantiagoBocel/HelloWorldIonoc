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
  isQuery:boolean=false;
  Confirmacion:any;
  Consulta:any;
  id_cotizacion:any; 
  id_compra:any;
  cantidad:any;
  constructor(public provedor: RestProvider) {}

  ngOnInit() {}
  async Cotizador(moneda){
    //debugger
    let CoinOrgin = this.Original
    let CoinDest = this.Destino
    this.cantidad = moneda.value;
    let resultado 
    this.provedor.Cotizar(CoinOrgin,CoinDest,moneda.value).then(data=>{
      this.Criptomoneda = data;
      this.Tabla_Cotizar()
    resultado = data;
    }).catch(data=>{
      console.log(data);
    })
    this.timer = 15;
    setInterval(()=>{
      this.updateTimevalue();
    },1000);    
    if(this.timer != 0)
      this.isenabled=true; 
  }

  Tabla_Cotizar(){
    let usuario= "Santiago"
    let browser = this.navegador();
    let tiempo = this.Calcular_tiempo();
    let divice = navigator.platform; 
    this.provedor.Tabla_Cotizar(usuario,this.cantidad,this.Destino, this.Criptomoneda,browser, divice,tiempo).then(data=>{
      this.id_cotizacion = data;
    }).catch(data=>{
    console.log(data)
  })
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
    if(this.timer<= 0){
      this.timer = 0
      this.isenabled=false;
    }
    seconds = String("0" + Math.floor(seconds)).slice(-2);

    const text = seconds;
    this.time.next(text)
  }
  async Consultar(){
   // debugger 
   this.provedor.Leer_base(this.id_compra).then(data=>{
    let prueba = String(data);
    this.Inf_Consulta(prueba);
    }).catch(data=>{console.log(data)})
  }
  async Inf_Consulta(Consulta){
    //debugger
    var datos = Consulta.split(",");
    this.Consulta = 
    datos[7].replace("\""," ").replace("\""," ").replace("\""," ").replace("\""," ") +"\n"+"\n"+
    datos[4].replace("\""," ").replace("\""," ").replace("\""," ").replace("\""," ") +"\n"+"\n"+
    datos[3].replace("\""," ").replace("\""," ").replace("\""," ").replace("\""," ") +"\n"+"\n"+
    datos[8].replace("\""," ").replace("\""," ").replace("\""," ").replace("\""," ");
  }

  async Confirmar(){
    //debugger
    let CoinDest = this.Destino
    let usuario= "Santiago"
    let browser = this.navegador();
    let resultado = this.Criptomoneda;
    let tiempo = this.Calcular_tiempo();
    let divice = navigator.platform;
    this.provedor.Tabla_Compra(this.id_cotizacion,tiempo,usuario,CoinDest,this.cantidad,resultado,browser,divice).then(data=>{
    this.id_compra = data;
    }).catch(data=>{
      console.log(data)
    })
    this.isQuery=true;
    this.timer = 0
    this.isenabled=false; 
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
   " Hora "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
 }

}
