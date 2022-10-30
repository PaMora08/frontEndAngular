import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public persona: Persona | undefined;
  public editPersona: Persona | undefined;
  myPortfolio: any;

  
  constructor(private datosPortfolio: PortfolioService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPortfolio();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false; 
    }
  }

  cargarPortfolio(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => { this.myPortfolio = data[0]; })
  }

  public onOpenModal(mode: string, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.myPortfolio = persona;
      button.setAttribute('data-target', '#editPersonaModal')

    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdatePortfolio(persona: Persona) {
    this.editPersona = persona;
    document.getElementById('add-persona-form')?.click();
    this.datosPortfolio.actualizarPersona(persona).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.cargarPortfolio();
      }, error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
 
}
