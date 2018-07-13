import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonnesComponent }      from './personnes/personnes.component';
import { PersonneDetailComponent }  from './personne-detail/personne-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: PersonnesComponent },
  { path: 'personne/detail/:id', component: PersonneDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
