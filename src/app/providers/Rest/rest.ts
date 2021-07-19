import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
 export class RestProvider{
   tipo_cambio:any;
   constructor(public http:HttpClient){
     console.log("Hola ResetProvider")
    }
    async EscribirAPI(Name,LastName){
        //debugger 
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
            })
          };
        let postData = {Name,LastName}
        var Api_URL = "https://gw585k8vz2.execute-api.us-east-2.amazonaws.com/Pruebas/hola-mundo";   
          return new Promise(resolve=> {
            this.http.post(Api_URL, postData,httpOptions).subscribe(data => {
              resolve(data["body"]);
            },err=>console.log(err))
          });
   }
   //conectado con Lambda_Cotizar
   async Tabla_Cotizar(usuario,cantidad,CoinDest,CoinOrg,resultado,browser, divice,tiempo,Usuarioip,geolocalizacion){
    //debugger
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    let postData = {usuario,cantidad,CoinDest,CoinOrg,resultado,browser, divice,tiempo,Usuarioip,geolocalizacion}
    var Api_URL = "https://top2rb438h.execute-api.us-east-2.amazonaws.com/Escribir/escribir";
    return new Promise(resolve=> { this.http.post(Api_URL, postData,httpOptions).subscribe(data=>{
      console.log(data);
      resolve(data);    
      },err=>console.log(err))
    });
   }
   //conectada con Lambda_Compra
   async Tabla_Compra(id_Cotizador,tiempo,usuario,CoinDest,cantidad,resultado,browser,divice){
    //debugger
    let cambio = this.tipo_cambio;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    let postData = {id_Cotizador,tiempo,usuario,CoinDest,cantidad,resultado,browser,divice,cambio}
    var Api_URL = "https://iwmxhurxh1.execute-api.us-east-2.amazonaws.com/Escribir/lectrua";
    return new Promise(resolve=> { this.http.post(Api_URL, postData,httpOptions).subscribe(data=>{
      console.log(data);
      resolve(data);    
      },err=>console.log(err))
    });
   }
   async Leer_base(Id){
     //debugger
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    let postData = {Id}
    var Api_URL = " https://3qylgesda5.execute-api.us-east-2.amazonaws.com/Lectura/lectura";
    return new Promise(resolve=> { this.http.post(Api_URL, postData,httpOptions).subscribe(data=>{
        resolve(data);    
        },err=>console.log(err))
      });
   }
    async Cotizar(Primero,Segundo,Moneda){
     //debugger
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    let postData = {Primero,Segundo,Moneda}
    var Api_URL = "https://pzelh4byv1.execute-api.us-east-2.amazonaws.com/Prueba_C/cotizador-criptomoneda";
      return new Promise(resolve=> {
        this.http.post(Api_URL, postData,httpOptions).subscribe(data => {
          resolve(data["body"]);
          this.tipo_cambio = data["exchange"];
        },err=>console.log(err))
      });
   }
 }


