import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  usuario: Object={
    nit:null,
    nombre:null,
    telefono:null,
    direccion:null
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("ngForm",forma);
    console.log("Valor",forma.value);
  }

}
