import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoList: Proyectos[] = [];
  constructor(private sProy: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.sProy.lista().subscribe(data => { this.proyectoList = data; })
  }

}

