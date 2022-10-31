import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  api = `https://portfback.herokuapp.com/`;
  constructor(private http:  HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(`api/persona/traer`);
  }
}
