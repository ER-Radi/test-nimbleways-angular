import { Component, OnInit } from '@angular/core';

import { PersonneService } from '../personne.service';
import { Personne } from '../personne';
import { PERSONNES } from '../mock-personnes';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;

  constructor(private personneService: PersonneService) { }

  ngOnInit() {
    this.getPersonnes();
  }

  getPersonnes(): void {
    this.personneService
      .getPersonnes()
      .subscribe(personnes => this.personnes = personnes);;
  }

}
