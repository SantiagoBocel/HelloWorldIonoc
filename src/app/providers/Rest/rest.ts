import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
 export class RestProvider{

   constructor(public http:HttpClient){
     console.log("Hola ResetProvider")
    }
    ObtenerRespuesta;
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

    Cotizar(){
    // debugger
    var Api_URL = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT";
    return new Promise(resolve=> {
      this.http.get(Api_URL).subscribe(data => {resolve(data);},err=>console.log(err))
    })
   }

 }


