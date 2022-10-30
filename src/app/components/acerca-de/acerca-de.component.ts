import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  myPortfolio: any;

  constructor(private datosPortfolio: PortfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarAcercaDe();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

    cargarAcercaDe(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        this.myPortfolio = data[0];
      });

  }

}
