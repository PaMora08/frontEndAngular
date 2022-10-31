import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  api = `https://portfback.herokuapp.com/api/persona`;
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.api + `/traer`);
  }
  public updatePersona(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(this.api + `/editar`, persona);
  }
}
