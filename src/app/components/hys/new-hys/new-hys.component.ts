import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {

  nombreSkill: string='';
  imgSkill: string='';

  constructor(private serviSkill: SkillService, private router:Router) { }

  ngOnInit(): void {
  }
   
  onCreate(): void{
    const skill = new Skill(this.nombreSkill, this.imgSkill);
    this.serviSkill.save(skill).subscribe(data => {
      alert("Experiencia agregrada");
      this.router.navigate(['']);
     }, err => {alert("Falló la carga de la experiencia laboral");
    this.router.navigate(['']);
  })
 
  } 

}
