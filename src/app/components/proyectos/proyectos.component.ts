import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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
  private unsubscribe$ = new Subject<void>();
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
 
  delete(idProyecto?: number) {
    if (idProyecto != undefined) {
      this.sProy.delete(idProyecto).pipe(takeUntil(this.unsubscribe$)).     //prevengo el uso de memoria infinito
        subscribe((result) => {
          console.log(result);
          this.cargarProyecto();
        }, error => {
          console.log("Error al eliminar la experiencia");
          this.cargarProyecto();
  
        }
        );
    }        
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }

}

