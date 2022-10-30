import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];
  editSkill: Skill | undefined;
  deleteSkill: Skill | undefined;
  private unsubscribe$ = new Subject<void>();

  constructor(private serviSkill: SkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.serviSkill.lista().subscribe(data => { this.skill = data; })
  }

  delete(idSkill?: number) {
    if (idSkill != undefined) {
      this.serviSkill.delete(idSkill).pipe(takeUntil(this.unsubscribe$)).     //prevengo el uso de memoria infinito
        subscribe((result) => {
          console.log(result);
          this.cargarSkill();
          console.log("delete paso aca");
        }, error => {
          console.log("Error al eliminar la experiencia");
          this.cargarSkill();
  
        }
        );
    }        
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }
  
}


