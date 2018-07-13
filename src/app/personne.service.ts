import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Personne } from './personne';
import { PERSONNES } from './mock-personnes';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor() { }

  getPersonnes(): Observable<Personne[]> {
    return of(PERSONNES);
  }

  getPersonne(id: number): Observable<Personne> {
    return of(PERSONNES.find(personne => personne.id === id));
  }

}
