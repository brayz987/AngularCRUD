import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string='http://localhost/empleados/';
  constructor( private client:HttpClient ) {    }
    
  agregarEmpleado(datosEmpleado:Empleado):Observable<any> {
    return this.client.post(this.API+"?insertar=1",datosEmpleado);
  }

  obtenertEmpleados(){
    return this.client.get(this.API);
  }

  borrarEmpleado(id:any):Observable<any> {
    return this.client.get(this.API+"?borrar="+id);
  }

  obtenerEmpleado(id:any){
    return this.client.get(this.API+"?consultar="+id);
  }

  editarEmpleado(id:any, datosEmpleado:Empleado):Observable<any> {
    return this.client.post(this.API+"?actualizar="+id,datosEmpleado);
  }
}
