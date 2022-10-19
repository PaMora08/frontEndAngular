import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(`api/proyectos/lista`);
  }

 /* public detail(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }*/

  public save(proy: Proyectos): Observable<any>{
    return this.httpClient.post<any>(`api/proyectos/create`, proy);
  }

  public update(id: number, proy: Proyectos): Observable<any>{
    return this.httpClient.post<any>(`api/proyectos/update/{idProyecto}`, proy);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(`api/proyectos/delete/{idProyecto}`);
  }
}