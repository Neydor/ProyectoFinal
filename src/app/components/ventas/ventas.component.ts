import {AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DataTableDirective} from 'angular-datatables';
import {productos} from "./productos";
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit, AfterViewInit  {
//
  usuario:Object = {
    nombre:null,
    apellido:null,
    correo:null
  }


  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
//<div class="mx-auto"><label block>Nombre</label></div><input block type="text" placeholder="Nombre" name="nombre"/>
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      data:productos,
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'Nombre',
        data: 'nombre'
      }, {
        title: 'Precio',
        data: 'precio'
      },{
        title: 'Cantidad',
        data: 'cantidad'
      }]
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });

  }

  guardar(forma:NgForm){
    console.log("Formulario posteado");
    console.log("ngForm",forma);
    console.log("Valor",forma.value);
  }
}
