import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(`api/persona/traer`);
  }
  public updatePersona(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(`api/persona/editar`, persona);
  }
}
