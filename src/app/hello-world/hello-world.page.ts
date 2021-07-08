import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.page.html',
  styleUrls: ['./hello-world.page.scss'],
})
export class HelloWorldPage implements OnInit {

  Nombre = "";
  constructor() { }

  ngOnInit() {
  }

  async Escribir(nombre){
    console.log("usuario",nombre.value);
    this.Nombre = nombre.value;
    // try{
    //   const Nombre = await Usuario.value;
    //   console.log(Nombre);
    // }catch(error)
    // {
    //   console.log("Error->",error)
    // }
  }

}
