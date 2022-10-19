import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expUrl= `/api/laboral/`;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expUrl + `listaExperiencia`);
  }

  public create(experiencia: Experiencia): Observable<Experiencia> {
    return this.httpClient.post<Experiencia>( this.expUrl + `createExperiencia`, experiencia);
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expUrl + `detail/${id}`);
  }

  public update(experiencia: Experiencia): Observable<Experiencia> {
    return this.httpClient.put<Experiencia>(this.expUrl + `update`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>( this.expUrl + `delete/${id}`);
  }
}