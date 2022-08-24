import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(`api/laboral/listaExperiencia`);
  }

 /* public detail(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }*/

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(`api/laboral/createExperiencia`, experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(`api/laboral/updateExperiencia/{idExp}`, experiencia);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(`api/laboral/deleteExperiencia/{idExp}`);
  }
}
