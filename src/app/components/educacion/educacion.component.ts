import { NgForOf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  editEducation: Educacion | undefined;
  deleteEducation: Educacion | undefined;
  constructor(private sEducacion: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => { this.educacion = data; })
  }

  public onOpenModal(mode: string, educacion?: Educacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducationModal');
    } else if (mode === 'delete') {
      this.deleteEducation = educacion;
      console.log("pasó valor a deleteEducation");
      button.setAttribute('data-target', '#deleteEducationModal')
      console.log("por aca tambien");
    } else if (mode === 'edit') {
      this.editEducation = educacion;
      button.setAttribute('data-target', '#editEducationModal')

    }
    container?.appendChild(button);
    button.click();
  }

  public onAddEducation(addForm: NgForm) {
    document.getElementById('add-education-form')?.click();
    this.sEducacion.save(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.cargarEducacion();
        addForm.reset();
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateEducation(educacion: Educacion) {
    this.editEducation = educacion;
    document.getElementById('add-education-form')?.click();
    this.sEducacion.update(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.cargarEducacion();
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onDeleteEducation(idEdu: number): void {
    if (idEdu != undefined) {
      this.sEducacion.delete(idEdu).subscribe((result) => {
        console.log(result);
        this.cargarEducacion();
      }, error => {
        console.log("Error al modificar la experiencia laboral");
        this.cargarEducacion();

      }
      );
    }
  }
}
