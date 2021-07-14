import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
 export class RestProvider{

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

   async BaseDatos(id,direccionIP,browser,Transaccion){
     debugger
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    let postData = {id,direccionIP,browser,Transaccion}
    var Api_URL = " https://gqbds2fp8a.execute-api.us-east-2.amazonaws.com/Escritura/escritura";
        this.http.post(Api_URL, postData,httpOptions).subscribe(data=>{
          console.log(data);
        },err=>console.log(err))
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
        },err=>console.log(err))
      });
   }

 }


