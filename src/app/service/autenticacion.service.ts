import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  currentUserSubject : BehaviorSubject<any>;
  constructor(private http:HttpClient) { 

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));

  }
  IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(`api/auth/login`, credenciales).pipe(map(data=>{
      sessionStorage.setItem(`currentUser`, JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log("esto es lo que tiene data en iniciar sesion auth" + JSON.stringify(data));
      
      return data;

    }))
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
