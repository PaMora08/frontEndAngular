import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;
  myPortfolio: any;

  /*constructor(private headerService: HeaderService) { }*/

  constructor(private datosPortfolio: PortfolioService){}
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log("Datos personales:" + JSON.stringify(data));
      this.myPortfolio = data[0];
    })
  }

 /* public getPersona(): void {
    this.headerService.getPersona().subscribe({
      next: (response: Persona) => {
        this.persona = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }*/
}
