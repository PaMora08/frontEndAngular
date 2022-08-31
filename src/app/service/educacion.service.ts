import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  expURL = '/api/edu/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.expURL + `lista`);
  }

  public detail(idEdu: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.expURL + `detail/${idEdu}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.expURL + `createEducacion`, educacion);
  }

  public update(educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.expURL +  `update`, educacion);
  }

  public delete(idEdu: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${idEdu}`);
  }
}
