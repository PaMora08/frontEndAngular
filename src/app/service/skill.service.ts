import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  expURL = '/api/skill/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.expURL + `list`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.expURL + `create`, skill);
  }

  public update(skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.expURL +  `update`, skill);
  }

  public delete(idSkill: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${idSkill}`);
  }
}
