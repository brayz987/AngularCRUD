import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  empleados:any;

  constructor(private crudService:CrudService) {

  }

  ngOnInit(): void {
    this.crudService.obtenertEmpleados().subscribe(respuesta=>{
      respuesta = Array.of(respuesta)[0]
      this.empleados = respuesta;
    });
  }

  borrarRegistro(id:any, iControl:any){
    if(window.confirm("Realmente quiere borrar el registro?")){
    this.crudService.borrarEmpleado(id).subscribe(()=>{
      this.empleados.splice(iControl,1);
    });

  }
}  
}
