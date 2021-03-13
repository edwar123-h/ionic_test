import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  celular = null;
  email = null;
  
  usuarios = [];
  constructor() {}

  GuardarDatos() {
    //agregando datos a la base de datos en memoria 
    this.usuarios.push({
      nombre: this.nombre
    })
    //limpiando datos
    this.nombre = "";
  }

}
