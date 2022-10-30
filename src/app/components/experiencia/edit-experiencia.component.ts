import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  expLaboral: Experiencia = null;

  constructor(private expService: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['idExp'];
    console.log("valor idExp" + id);
    this.expService.detail(id).subscribe(
      data => {
        this.expLaboral = data;
      }, err => {
        alert("Error al modificar la experiencia laboral");
        this.router.navigate(['']);

      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['idExp'];
    this.expService.update(this.expLaboral).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la experiencia laboral");
        this.router.navigate(['']);
      }
    )

  }

}
