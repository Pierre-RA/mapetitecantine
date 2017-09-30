import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConceptComponent } from './concept.component';
import { routing } from './concept.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ConceptComponent]
})
export class ConceptModule { }
