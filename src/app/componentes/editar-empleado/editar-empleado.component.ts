import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  id:any;
  empleado:any;
  formularioEmpleado:FormGroup;

  constructor(
    private activateRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.crudService.obtenerEmpleado(this.id).subscribe(respuesta=>{
      this.empleado = respuesta;
      this.formularioEmpleado.setValue({
        nombre:this.empleado[0]['nombre'],
        correo:this.empleado[0]['correo'],
    })
    })
    this.formularioEmpleado=this.formulario.group({
      nombre:[''],
      correo:['']
    })
  }

  ngOnInit(): void {

  }

  enviarDatos():any{
    this.crudService.editarEmpleado(this.id, this.formularioEmpleado.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }

} 
