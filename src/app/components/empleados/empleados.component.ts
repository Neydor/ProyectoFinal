import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  usuario:Object = {
    cedula:"1116267130",
    nombre:"Neydor",
    apellido:"Avila",
    telefono:"2332113",
    direccion:"calle falsa 123",
    correo:"Neydor@textil.com",
    contrasena:"1234", 
    estado:'false',
    cargo:""
  }
  cargos=[{nombre: "Asesor de ventas"},
          {nombre:"Analista de compras"}];

  constructor() {

  }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("ngForm",forma);
    console.log("Valor",forma.value);
  }

}
