import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Productos } from "./productos";
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  productos:any[]=Productos;
  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null
  }

  //<div class="mx-auto"><label block>Nombre</label></div><input block type="text" placeholder="Nombre" name="nombre"/>

  constructor(){

  }
  ngOnInit() {

  }
  guardar(forma: NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("Valor", forma.value);
  }
}
