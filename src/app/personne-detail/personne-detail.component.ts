import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PersonneService }  from '../personne.service';
import { Personne } from '../personne';

@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styleUrls: ['./personne-detail.component.css']
})
export class PersonneDetailComponent implements OnInit {
  personne: Personne;

  constructor(
    private route: ActivatedRoute,
    private personneService: PersonneService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPersonne();
  }

  getPersonne(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personneService.getPersonne(id)
      .subscribe(personne => this.personne = personne);
  }

  goBack(): void {
    this.location.back();
  }

}
