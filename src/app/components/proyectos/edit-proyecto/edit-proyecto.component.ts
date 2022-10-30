import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proy: Proyectos =  null;

  constructor(private serviProy: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['idProyecto'];
    console.log("valor idProyecto " + id);
    this.serviProy.detail(id).subscribe(
      data => {
        console.log("pasó por detail")
        this.proy = data;
      }, err => {
        alert("Error al modificar el proyecto onInit");
        this.router.navigate(['']);

      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['idProyecto'];
    console.log("valor id en Onupdate " + id);
    this.serviProy.update(this.proy).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto OnUpdate");
        this.router.navigate(['']);
      }
    )

  }

}
