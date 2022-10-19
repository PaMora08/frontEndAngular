import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, OnDestroy {
  experiencia: Experiencia[] = [];
  private unsubscribe$ = new Subject<void>();
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.experiencia = data; })
  }
  delete(idExp?: number) {
    if (idExp != undefined) {
      this.sExperiencia.delete(idExp).pipe(takeUntil(this.unsubscribe$)).     //prevengo el uso de memoria infinito
        subscribe((result) => {
          console.log(result);
          this.cargarExperiencia();
          console.log("delete paso aca");
        }, error => {
          console.log("Error al eliminar la experiencia");
          this.cargarExperiencia();
  
        }
        );
    }        
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }
}