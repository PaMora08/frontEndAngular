import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`api/persona/traer`);
  }

  public actualizarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`api/persona/editar`, persona);
  }
}