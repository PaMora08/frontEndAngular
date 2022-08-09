import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url: string="htttp:localhost:8080/api/";
  constructor(private http:HttpClient) { 
    
  }
  obtenerDatos(): Observable<any>{
    return this.http.get(this.url+"persona");
  }
}

