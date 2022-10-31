import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/proyectos'; 

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  api = 'https://portfback.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(`api/proyectos/lista`);
  }

  public detail(idProyecto: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(`api/proyectos/detail/${idProyecto}`);
  }

  public save(proy: Proyectos): Observable<any>{
    return this.httpClient.post<any>(`api/proyectos/create`, proy);
  }

  public update(proyecto: Proyectos): Observable<Proyectos> {
    return this.httpClient.put<Proyectos>(`api/proyectos/update`, proyecto);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(`api/proyectos/delete/{idProyecto}`);
  }
}