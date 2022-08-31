import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreExp: string = '';
  descripcionExp: string = '';
  fechaInicioExp: Date = new Date ;
  fechaFinExp: Date = new Date;
  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreExp, this.descripcionExp, this.fechaInicioExp, this.fechaFinExp);
    this.sExperiencia.create(expe).subscribe(data => {
      alert("Experiencia agregrada");
      this.router.navigate(['']);
     }, err => {alert("Falló la carga de la experiencia laboral");
    this.router.navigate(['']);
  })
 
  }

}
