import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {  

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(`api/edu/lista`);
  }

 /* public detail(id:number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }*/

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(`api/edu/createEducacion`, educacion);
  }

  public update(idEdu: number, educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(`api/edu/updateEducacion/{idEdu}`, educacion);
  }

  public delete(idEdu: number):Observable<any>{
    return this.httpClient.delete<any>(`api/edu/deleteEducacion/{idEdu}`);
  }
}
