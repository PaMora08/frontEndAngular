import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  myPortfolio : any;

  constructor(public datosPortfolio: PortfolioService, private activatedRouter: ActivatedRoute, private router: Router ) { }

  isLogged= false;

  ngOnInit(): void {
    
    this.datosPortfolio.obtenerDatos().subscribe(
      data => {
        this.myPortfolio = data[0];
      }, err => {
        alert("Error al modificar acerca de onInit");
        this.router.navigate(['']);

      }
    )
  }

  cargarPersona(){

    this.datosPortfolio.obtenerDatos().subscribe(data =>
      (this.myPortfolio = data[0]))
  }

  onUpdate(): void {
    
    this.datosPortfolio.actualizarPersona(this.myPortfolio).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar acerca de onUpdate ");
        this.router.navigate(['']);
      }
    )

  }
}
