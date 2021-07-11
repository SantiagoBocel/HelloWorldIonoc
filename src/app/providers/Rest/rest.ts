import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
 export class RestProvider{

    constructor(public http:HttpClient){
        console.log("Hola ResetProvider")
    }
    
    EscribirAPI(Name){
        //debugger 
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
            })
          };
        let postData = {Name}
        var Api_URL = "https://gw585k8vz2.execute-api.us-east-2.amazonaws.com/Pruebas/hola-mundo";
        this.http.post(Api_URL, postData, httpOptions).subscribe(data => {
            console.log(data["body"]);
        }, error => {
                console.log(error);
    });
      
    }
 }


