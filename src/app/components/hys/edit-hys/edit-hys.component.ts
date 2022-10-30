import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {

  editSkill: Skill = null;

  constructor(private serviceSkill: SkillService, private activatedRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['idSkill'];
  console.log("valor de idSkill em ngOninit" + id);

    this.serviceSkill.detail(id).subscribe(
      data => {
        this.editSkill = data;
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);

      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['idSkill'];
    console.log("valor de idSkill" + id);
    this.serviceSkill.update(this.editSkill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )

  }

}
